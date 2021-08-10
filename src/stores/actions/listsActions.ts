import {
  editTitleActionCreator,
  moveTaskActionCreator,
} from '../../types/actionCreatorTypes'

export const ADD_LIST = 'ADD_LIST'

export const DRAG_HAPPENED = 'DRAG_HAPPENED'

export const EDIT_LIST_TITLE = 'EDIT_LIST_TITLE'

export const DELETE_LIST = 'DELETE_LIST'

export const MOVE_TASK = 'MOVE_TASK'

export const CREATE_LIST = 'CREATE_LIST'

export const REMOVE_LIST = 'REMOVE_LIST'


export const editTitle: editTitleActionCreator = (listID, newTitle) => {
  return {
    type: EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  }
}

export const moveTask: moveTaskActionCreator = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexEnd,
  droppableIndexStart,
  draggableId,
  type
) => {
  return {
    type: MOVE_TASK,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
    },
  }
}

export const deleteList = (listID) => {
  return {
    type: REMOVE_LIST,
    payload: {
      listID,
    },
  }
}

export const addList = (title) => {
  return {
    type: CREATE_LIST,
    payload: {
      title,
    },
  }
}
