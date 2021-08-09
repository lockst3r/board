import { IBoardsList } from './stateTypes'

export interface ISetActiveBoard {
  type: 'SET_ACTIVE_BOARD'
  payload: {
    id: string | number
  }
}

export interface IAddBoard {
  type: 'ADD_BOARD'
  payload: {
    title: string
    id: string | number
  }
}

export interface IAddCard {
  type: 'ADD_CARD'
  payload: {
    text: string
    listID: string | number
    id: string | number
  }
}

export interface IEditCard {
  type: 'EDIT_CARD'
  payload: {
    id: string | number
    listID: string | number
    newText: string
  }
}

export interface IDeleteCard {
  type: 'DELETE_CARD'
  payload: {
    id: string | number
    listID: string | number
  }
}

export interface IEditTitle {
  type: 'EDIT_LIST_TITLE'
  payload: {
    listID: string | number
    newTitle: string
  }
}

export interface IMoveTask {
  type: 'DRAG_HAPPENED'
  payload: {
    droppableIdStart: string | number
    droppableIdEnd: string | number
    droppableIndexEnd: string | number
    droppableIndexStart: string | number
    draggableId: string | number
    type: string | number
    //boardID: string | number
  }
}

//---------------------------------------

export interface IGetBoards {
  type: string
  //boardsList: Array<IBoardsList>
}

export interface IChooseBoard {
  type: 'CHOOSE_BOARD'
  payload: {
    id: string | number
  }
}

export interface IGotBoards {
  type: 'GOT_BOARDS'
  payload: { boardsList: Array<IBoardsList>; active: Array<IBoardsList> }
}
