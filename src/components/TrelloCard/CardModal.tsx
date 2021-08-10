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
import { connect } from 'react-redux'
import {Modal} from '../Common/Modal/index'
import { TrafficRounded } from '@material-ui/icons'

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
})

interface ICardModal {
  onClick: () => void
  members: any
  fetchMembers: () => void
}

export const _CardModal: ICardModal = ({ fetchMembers, members }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.title}>
          {'Кароче тайтл'}
        </DialogTitle>
        <DialogContent>
          <Grid>
            <DialogContentText>Members</DialogContentText>
            <Grid container direction="row">
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
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
          <Checkbox />
        </DialogActions>
      </Dialog>
      </Modal>
    </div>
  )
}

const mapState = (state) => {
  return {
    members: state.members,
  }
}

const mapDispatch = {
  fetchMembers,
}

// export CardModal = connect(mapState, mapDispatch)(_CardModal)

