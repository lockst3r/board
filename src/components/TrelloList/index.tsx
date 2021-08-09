// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { TrelloCard } from '../TrelloCard'
import TrelloCreate from '../TrelloCreate'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Grid, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { editTitle, deleteList } from '../../stores/actions/listsActions'
import Icon from '@material-ui/core/Icon'
import { IconButton } from '../Common/Buttons/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
/*
`

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
` */

const useStyles = makeStyles({
  listContainer: {
    backgroundColor: '#dfe3e6',
    borderRadius: '3px',
    width: 300,
    padding: 8,
    height: '100%',
    margin: '0 8px 0 0',
  },
  listInput: {
    width: '100%',
    border: 'none',
    outlineColor: 'blue',
    borderRadius: 3,
    marginBottom: 3,
    padding: 5,
  },
  titleContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in-out',
    opacity: '0.4',
    '&:hover': {
      opacity: '0.8',
    },
  },
})

const TrelloList = ({ title, cards, listID, index, deleteList }) => {
  const classes = useStyles()
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(title)
 debugger
  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          type="text"
          value={listTitle}
          onChange={handleChange}
          className={classes.listInput}
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    )
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  const handleChange = (e) => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const handleFinishEditing = () => {
    setIsEditing(false)
    editTitle(listID, listTitle)
  }

  const handleDeleteList = () => {
    deleteList(listID)
  }

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <Grid
          className={classes.listContainer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <div
                      className={classes.titleContainer}
                      onClick={() => setIsEditing(true)}
                    >
                      <h4>{listTitle}</h4>
                      <IconButton
                        className={classes.icon}
                        onClick={handleDeleteList}
                        icon={<DeleteIcon />}
                      />
                    </div>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </Grid>
      )}
    </Draggable>
  )
}

const mapDispatch = {
  deleteList,
}

export default connect(null, mapDispatch)(TrelloList)
