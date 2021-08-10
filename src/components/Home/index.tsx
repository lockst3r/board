import * as React from 'react'
import { connect } from 'react-redux'
import { addBoard, editBoard } from '../../stores/actions/boardsActions'
import { BoardThumbnail } from './BoardThumbnail'
import { makeStyles, Grid, Box } from '@material-ui/core'
import {
  boardOrderSelector,
  boardsSelector,
} from '../../stores/selectors/index'
import { useFormHandlers } from '../../hooks/useFormHandlers'
import { MainTitle } from '../Common/Typography/MainTitle'
import { BoardsCreatorTextField } from './BoardsCreatorTextField'
import { CreateBoardForm, ICreateBoardFormValues } from './CreateBoardForm'
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  form: {
    textAlign: 'center',
    marginTop: 60,
  },
  boardsContainer: {
    flex: 1,
    height: '50%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

const Home = ({ boards, boardOrder, addBoard }) => {
  const classes = useStyles()
  const [newBoardTitle, setNewBoardTitle] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardTitle(e.target.value)
  }

  const handleSubmit = (values: ICreateBoardFormValues) => {
    addBoard(values.title)
  }

  return (
    <Grid direction={'column'} alignItems={'center'} style={{ paddingTop: 50 }}>
      <Grid
        className={classes.boardsContainer}
        justifyContent={'space-between'}
      >
        {boardOrder.map((boardID) => {
          const board = boards[boardID]

          return (
            <>
              <BoardThumbnail board={board} id={boardID} key={boardID} />
            </>
          )
        })}
      </Grid>
      <Grid>
        {
          <Box className={classes.form}>
            <MainTitle>Create a new Board</MainTitle>
            <CreateBoardForm
              initialValues={{ title: '' }}
              value={newBoardTitle}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </Box>
        }
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  boards: boardsSelector(state),
  boardOrder: boardOrderSelector(state),
})

const mapDispatch = {
  addBoard,
}

export default connect(mapStateToProps, mapDispatch)(Home)
