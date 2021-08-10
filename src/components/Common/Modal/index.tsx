import * as React from 'react'
import { Dialog } from '@material-ui/core'
import { connect, useSelector } from 'react-redux'
import { modalSelector } from '../../../stores/selectors'

const _Modal = (props) => {
  const { children, ...otherProps } = props
  const show = useSelector((state) => modalSelector(state))
  return (
    <Dialog open={show} {...otherProps}>
      {children}
    </Dialog>
  )
}

export const Modal = connect(React.memo(_Modal))
