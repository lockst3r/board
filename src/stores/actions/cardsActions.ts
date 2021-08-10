import {
  addCardActionCreator,
  editCardActionCreator,
  deleteCardActionCreator,
} from '../../types/actionCreatorTypes'
import { v4 as uuidv4 } from 'uuid'
import * as ActionsType from '../../constants/ActionType'

export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const DELETE_CARD = 'DELETE_CARD'

export const addCard: addCardActionCreator = (listID, text) => {
  const id = uuidv4()
  return {
    type: ADD_CARD,
    payload: { text, listID, id },
  }
}

export const editCard: editCardActionCreator = (id, listID, newText) => {
  return {
    type: EDIT_CARD,
    payload: { id, listID, newText },
  }
}

export const deleteCard: deleteCardActionCreator = (id, listID) => {
  return {
    type: DELETE_CARD,
    payload: { id, listID },
  }
}

export const addMember = (cardID, memberID, name) => {
  return {
    type: ActionsType.ADD_MEMBER_REQUESTED,
    payload: {
      cardID,
      memberID,
      name,
    },
  }
}
