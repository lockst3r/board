import * as React from 'react'
import { makeStyles, Typography, TypographyProps } from '@material-ui/core'
import { secondary } from '../../../styles/colors'

const useStyles = makeStyles({
  root: {
    color: secondary,
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: "'Signika Negative', sans-serif",
  },
})

const _MainTitle = (props: TypographyProps) => {
  const classes = useStyles()
  const { children, ...otherProps } = props
  return (
    <Typography
      variant={'h2'}
      gutterBottom
      className={classes.root}
      {...otherProps}
    >
      {children}
    </Typography>
  )
}

export const MainTitle = React.memo(_MainTitle)
