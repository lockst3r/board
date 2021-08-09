import * as React from 'react'
import TrelloList from '../TrelloList'
import { connect } from 'react-redux'
import TrelloCreate from '../TrelloCreate'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { setActiveBoard } from '../../stores/actions/boardsActions'
import { moveTask } from '../../stores/actions/listsActions'
import { Link } from 'react-router-dom'
import { Grid, makeStyles } from '@material-ui/core'
import { MainTitle } from '../Common/Typography/MainTitle'

const useStyles = makeStyles({
  titleContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  deleteButton: {
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in-out',
    opacity: '0.4',
    '&:hover': {
      opacity: 0.8,
    },
  },
  title: {
    fontSize: '48px',
    color: 'white',
    fontWeight: 'bold',
    textShadow: 'inherit',
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

const TrelloBoard = (props) => {
  const classes = useStyles()
  const { lists, cards, match, boards } = props
  const { boardID } = match.params
  debugger
  const board = boards[boardID]
  const listOrder = board.lists
  React.useEffect(() => {
    props.setActiveBoard(boardID)
  }, [])

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    moveTask(
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
      <Link to="/">Go Back</Link>
      <MainTitle>{board.title}</MainTitle>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <Grid
            dispau={'flex'}
            direction={'row'}
            container
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listOrder.map((listID, index) => {
              const list = lists[listID]
              debugger
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
}

export default connect(mapStateToProps, mapDispatch)(TrelloBoard)
