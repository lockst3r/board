import * as React from 'react'
import { Modal } from '../Common/Modal/'
import { useSelector, useDispatch } from 'react-redux'
import { modalSubCardSelector } from '../../stores/selectors/index'
import { closeSubmodal } from '../../stores/actions/modalCardActions'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export const MembersModal = () => {
  const open = useSelector((state) => modalSubCardSelector(state))
  const dispatch = useDispatch()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const hideModal = () => {
    dispatch(closeSubmodal())
  }

  return (
    <Modal open={open} hideModal={hideModal} fullScreen={fullScreen} id="xx">
      hi
    </Modal>
  )
}
