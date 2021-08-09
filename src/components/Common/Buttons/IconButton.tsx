import * as React from 'react'
import {
  IconButton as IconButtonMUI,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
import { IconButtonProps } from '@material-ui/core/IconButton'
import { primary } from '../../../styles/colors'
import classNames from 'classnames'
import { useCallback } from 'react'

const useStyles = makeStyles({
  root: {
    color: primary[600],
    '& .MuiIconButton-label': {
      '& .MuiSvgIcon-root': {
        fontSize: (props: IIconButtonProps) =>
          props.size == 'small' ? 16 : 'inherit',
      },
    },
    opacity: (props: IIconButtonProps) =>
      props.hideIfDisabled && props.disabled ? 0 : 'inherit',
  },
})

export interface IIconButtonProps extends IconButtonProps {
  icon: React.ReactNode
  tooltip?: string
  tooltipStyle?: React.CSSProperties
  hideIfDisabled?: boolean
  propagateClick?: boolean
}
const _IconButton = (props: IIconButtonProps) => {
  const {
    size = 'small',
    icon,
    className,
    tooltip,
    tooltipStyle,
    onClick,
    onMouseDown,
    propagateClick = false,
    ...otherProps
  } = props
  const classes = useStyles(props)

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!propagateClick) {
        event.stopPropagation()
      }

      if (onClick) {
        onClick(event)
      }
    },
    [onClick, propagateClick]
  )

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation()
      event.preventDefault()

      if (onMouseDown) {
        onMouseDown(event)
      }
    },
    [onMouseDown]
  )

  const button = (
    <IconButtonMUI
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      {...otherProps}
      size={size}
      className={classNames(classes.root, className)}
    >
      {icon}
    </IconButtonMUI>
  )

  if (tooltip) {
    return (
      <Tooltip title={tooltip} className={classes.root} style={tooltipStyle}>
        <div>{button}</div>
      </Tooltip>
    )
  }

  return button
}

export const IconButton = React.memo(_IconButton)
