import {
  setActiveBoardActionCreator,
  addBoardActionCreator,
} from '../../types/actionCreatorTypes'
import { v4 as uuidv4 } from 'uuid'
import { DELETE_CARD } from './cardsActions'

export const SET_ACTIVE_BOARD = 'SET_ACTIVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const EDIT_BOARD = 'EDIT_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'
export const setActiveBoard: setActiveBoardActionCreator = (id) => {
  return {
    type: SET_ACTIVE_BOARD,
    payload: id,
  }
}

export const addBoard: addBoardActionCreator = (title) => {
  const id = uuidv4()
  return {
    type: ADD_BOARD,
    payload: { title, id },
  }
}

export const editBoard = (id, newTitle) => {
  return {
    type: EDIT_BOARD,
    payload: {
      id,
      newTitle,
    },
  }
}

export const deleteBoard = (id) => {
  return {
    type: DELETE_BOARD,
    payload: {
      id,
    },
  }
}
