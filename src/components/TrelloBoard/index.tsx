import * as React from 'react'
import TrelloList from '../TrelloList'
import { connect } from 'react-redux'
import TrelloCreate from '../TrelloCreate'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { setActiveBoard } from '../../stores/actions/boardsActions'
import { moveTask } from '../../stores/actions/listsActions'
import { Link, useHistory } from 'react-router-dom'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { MainTitle } from '../Common/Typography/MainTitle'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { IconButton } from '../Common/Buttons/IconButton'
import { moveTaskActionCreator } from '../../types/actionCreatorTypes'
//import _CardModal from '../TrelloCard/CardModal'
const useStyles = makeStyles({
  listsConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  backContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
})

/* interface TreelloBordProps{
  setActiveBoard: () => void
  moveTask: moveTaskActionCreator,
  lists: any
} */

const TrelloBoard = (props) => {
  const classes = useStyles()
  const { lists, cards, match, boards } = props
  const { boardID } = match.params
  const history = useHistory()
  const board = boards[boardID]
  const listOrder = board.lists

  React.useEffect(() => {
    props.setActiveBoard(boardID)
  }, [])

  const moveHome = () => {
    history.push(`/`)
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    props.moveTask(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    )
  }

  if (!board) {
    return <p>Board not found</p>
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid className={classes.backContainer}>
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={moveHome}
          size={'medium'}
        />
        <Typography className={classes.title}>Move Home</Typography>
      </Grid>
      <Grid className={classes.title}>
        <MainTitle>{board.title}</MainTitle>
      </Grid>
      {/* <CardModal /> */}
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <Grid
            className={classes.listsConteiner}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listOrder.map((listID, index) => {
              const list = lists[listID]

              if (list) {
                const listCards = list.cards.map((cardID) => cards[cardID])

                return (
                  <>
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  </>
                )
              }
            })}
            {provided.placeholder}
            <TrelloCreate list={'list'} listID={'listID'} />
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
})

const mapDispatch = {
  setActiveBoard,
  moveTask,
}

export default connect(mapStateToProps, mapDispatch)(TrelloBoard)
