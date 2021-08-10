import * as React from 'react'
import { Modal } from '../Common/Modal/'
import { useSelector, useDispatch } from 'react-redux'
import {
  membersSelectors,
  modalSubCardSelector,
} from '../../stores/selectors/index'
import { closeSubmodal } from '../../stores/actions/modalCardActions'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { MuiThemeProvider, useTheme } from '@material-ui/core/styles'
import { User } from '../../components/Common/User'
import { fetchMembers } from '../../stores/actions/membersActions'
import { Grid } from '@material-ui/core'

export const MembersModal = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchMembers())
  }, [])
  const theme = useTheme()
  const open = useSelector((state) => modalSubCardSelector(state))
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const members = useSelector((state) => membersSelectors(state))
  const hideModal = () => {
    dispatch(closeSubmodal())
  }

  return (
    <Modal open={open} hideModal={hideModal} fullScreen={fullScreen} id="xx">
      <Grid>
        {members.map((member, key) => (
          <User name={member.name} avatar={member.avatar} key={key}/>
        ))}
      </Grid>
    </Modal>
  )
}
