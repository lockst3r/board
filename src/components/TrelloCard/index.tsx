import * as React from 'react'
import { Typography, Card, Grid, makeStyles } from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd'
import { editCard, deleteCard } from '../../stores/actions/cardsActions'
import { connect } from 'react-redux'
import TrelloForm from '../TrelloForm'
import TrelloButton from '../TrelloButton'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '../Common/Buttons/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { showModal } from '../../stores/actions/modalActions'
import { CardModal } from './CardModal'
const useStyles = makeStyles({
  cardContainer: {
    margin: '0 0 8px 0',
    position: 'relative',
    maxWidth: '100%',
    wordWrap: 'break-word',
  },
  icon: {
    position: 'absolute',
    //display: 'none',
    right: 5,
    top: 5,
    opacity: '0.5',
  },
  icon2: {
    position: 'absolute',
    //display: 'none',
    right: 5,
    bottom: 5,
    opacity: '0.5',
  },
})

const _TrelloCard = ({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const [cardText, setText] = React.useState(text)
  const classes = useStyles()
  const closeForm = () => {
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const saveCard = (e) => {
    e.preventDefault()

    dispatch(editCard(id, listID, cardText))
    setIsEditing(false)
  }

  const handleDeleteCard = () => {
    dispatch(deleteCard(id, listID))
  }

  const renderEditForm = () => {
    return (
      <TrelloForm
        text={cardText}
        onChange={handleChange}
        closeForm={closeForm}
        list={'h'}
      >
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
    )
  }

  const openModal = () => {
    dispatch(showModal())
  }

  const renderCard = () => {
    return (
      <>
        <Draggable draggableId={String(id)} index={index}>
          {(provided) => (
            <Grid
              className={classes.cardContainer}
              onClick={openModal}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card style={{ minHeight: 60 }}>
                <IconButton
                  className={classes.icon}
                  onMouseDown={() => setIsEditing(true)}
                  icon={<EditIcon />}
                />
                <IconButton
                  className={classes.icon2}
                  onMouseDown={handleDeleteCard}
                  icon={<DeleteIcon />}
                />

                <div>
                  <Typography>{text}</Typography>
                </div>
              </Card>
            </Grid>
          )}
        </Draggable>
         <CardModal /> 
      </>
    )
  }

  return isEditing ? renderEditForm() : renderCard()
}

export const TrelloCard = connect()(React.memo(_TrelloCard))
