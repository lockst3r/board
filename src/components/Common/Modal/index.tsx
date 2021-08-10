import * as React from 'react'
import { Dialog } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { modalSelector } from '../../../stores/selectors'
import { closeModal } from '../../../stores/actions/modalActions'

export const Modal = (props) => {
  const { children, ...otherProps } = props
  const dispatch = useDispatch()
  const show = useSelector((state) => modalSelector(state))

  const hideModal = () => {
    dispatch(closeModal())
  }
  return (
    <Dialog open={show} onClose={hideModal} {...otherProps}>
      {children}
    </Dialog>
  )
}
