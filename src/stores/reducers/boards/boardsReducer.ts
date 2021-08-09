import {
  ADD_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
} from '../../actions/boardsActions'
import { REHYDRATE } from 'redux-persist/lib/constants'
import {
  DRAG_HAPPENED,
  ADD_LIST,
  DELETE_LIST,
  CREATE_LIST,
} from '../../actions/listsActions'
const initialState = {
  'board-0': {
    id: 'board-0',
    lists: ['list-0'],
    title: 'myboard',
  },
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    /* case REHYDRATE:
      return { ...state, persistedState: action.payload } */

    case ADD_LIST: {
      const { boardID, id } = action.payload
      const board = state[boardID]
      
      const newListID = `list-${id}`
      const newLists = [...board.lists, newListID]
      board.lists = newLists
      return { ...state, [boardID]: board }
    }

    case DRAG_HAPPENED: {
      const { boardID } = action.payload
      const board = state[boardID]
      const lists = board.lists
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload

      // draggin lists around
      if (type === 'list') {
        const pulledOutList = lists.splice(droppableIndexStart, 1)
        lists.splice(droppableIndexEnd, 0, ...pulledOutList)
        board.lists = lists

        return { ...state, [boardID]: board }
      }
      return state
    }
    case DELETE_LIST: {
      const { listID, boardID } = action.payload
      const board = state[boardID]
      
      const lists = board.lists
      
      const newLists = lists.filter((id) => id !== listID)
      board.lists = newLists
      return { ...state, [boardID]: board }
    }

    case ADD_BOARD: {
      const { title, id } = action.payload
      const newID = `board-${id}`
      const newBoard = {
        id: newID,
        title,
        lists: [],
      }

      return { ...state, [newID]: newBoard }
    }
    case EDIT_BOARD: {
      const { id, newTitle } = action.payload
      const board = state[id]
      board.title = newTitle
      return { ...state, [`board-${id}`]: board }
    }
    /* case DELETE_BOARD: {
      const { id } = action.payload
      const board = state[id]
      board.title = newTitle
      return { ...state, [`board-${id}`]: board }
    } */
    default:
      return state
  }
}

export default boardsReducer
