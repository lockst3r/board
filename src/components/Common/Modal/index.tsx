import * as React from 'react'
import { Dialog } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { modalSelector } from '../../../stores/selectors'
import { closeModal } from '../../../stores/actions/modalCardActions'




export const Modal = (props) => {
  const { open, hideModal, children, ...otherProps } = props
  const dispatch = useDispatch()
  const show = useSelector((state) => modalSelector(state))

  return (
    <Dialog open={props.open} onClose={hideModal} {...otherProps}>
      {children}
    </Dialog>
  )
}
