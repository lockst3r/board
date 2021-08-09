import React from 'react'
import { SimpleCard } from '../Common/Cards/SimpleCard'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser'
import { useFormHandlers } from '../../hooks/useFormHandlers'
import { editBoard, deleteBoard } from '../../stores/actions/boardsActions'
import { useHistory } from 'react-router-dom'
import {
  IChangeBoardTitleValues,
  ChangeBoardTitleForm,
} from './ChangeBoardTitleForm'
import { connect } from 'react-redux'
import { IconButton } from '../Common/Buttons/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  card: {
    height: 200,
    minWidth: 200,
    borderRadius: 3,
    marginRight: 20,
    marginTop: 10,
    position: 'relative',
  },
  openContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 35,
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
      color: '#8de6d6',
    },
  },
  openText: {
    fontSize: 20,
    marginRight: 5,
  },
  closeIcon: {
    position: 'absolute',
    right: -5,
    top: -5,
  },
})

interface BoardThumbnailProps {
  board: {
    title: string
    id: string | number
    list: any
  }
  editBoard: any
  deleteBoard: any
}

const _BoardThumbnail = (props: BoardThumbnailProps) => {
  const { editModeOn, editModeOff, handleKeyDown } = useFormHandlers()
  const classes = useStyles()
  const history = useHistory()
  const { editBoard, deleteBoard } = props
  const { id, title } = props.board
  const handleClick = () => {
    editModeOn()
  }

  const handleOpenBoard = () => {
    history.push(`${location.pathname}${id}`)
  }

  const handleDeleteBoard = (e) => {
    e
    debugger
    deleteBoard(id)
  }

  const handleSubmit = (
    values: IChangeBoardTitleValues
    //formikHelpers: FormikHelpers<IChangeBoardTitleValues>
  ) => {
    editBoard(values.id, values.title)
    editModeOff()
  }

  return (
    <>
      <SimpleCard className={classes.card}>
        <IconButton
          icon={<CloseIcon />}
          className={classes.closeIcon}
          size={'medium'}
          onClick={handleDeleteBoard}
        />
        <Grid style={{ marginTop: '30px' }}>
          <ChangeBoardTitleForm
            initialValues={{ id, title }}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />
          <Grid>
            <Grid className={classes.openContainer}>
              <Button onClick={handleOpenBoard}>
                <Typography className={classes.openText}>Open Board</Typography>{' '}
                <OpenInBrowserIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </SimpleCard>
    </>
  )
}

const mapDispatch = {
  editBoard,
  deleteBoard,
}

export const BoardThumbnail = connect(
  null,
  mapDispatch
)(React.memo(_BoardThumbnail))
