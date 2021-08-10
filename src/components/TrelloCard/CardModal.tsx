import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  useTheme,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import { Grid, TextareaAutosize, Avatar, Checkbox } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { IconButton } from '../Common/Buttons/IconButton'
import AddIcon from '@material-ui/icons/Add'
import { fetchMembers } from '../../stores/actions/membersActions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Modal } from '../Common/Modal/index'
import { TrafficRounded } from '@material-ui/icons'
import { membersSelectors } from '../../stores/selectors'
const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
})

interface ICardModal {
  members: any
  fetchMembers: () => void
}

export const CardModal = () => {
  React.useEffect(() => {
    dispatch(fetchMembers())
  }, [members])
  const classes = useStyles()
  const members = useSelector((state) => membersSelectors(state))
  const dispatch = useDispatch()
debugger
 


  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <Modal fullScreen={fullScreen} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title" className={classes.title}>
          {'Кароче тайтл'}
        </DialogTitle>
        <DialogContent>
          <Grid>
            <DialogContentText>Members</DialogContentText>
            <Grid container direction="row">
              {members.map((member, ind) => (
                <Avatar key={ind} alt={member.name} src={member.avatar} />
              ))}
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <IconButton icon={<AddIcon />} />
            </Grid>
            <DialogContentText>Кароче тайтл</DialogContentText>
            <TextareaAutosize style={{ width: 400 }} />
          </Grid>
          <Grid>
            {' '}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography /* className={classes.heading}  */>
                  {' '}
                  */Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {}} color="primary">
            Disagree
          </Button>
          <Button onClick={() => {}} color="primary" autoFocus>
            Agree
          </Button>
          <Checkbox />
        </DialogActions>
      </Modal>
    </div>
  )
}

/* const mapState = (state) => {
  return {
    members: state.members,
  }
}

const mapDispatch = {
  fetchMembers,
}
 */
