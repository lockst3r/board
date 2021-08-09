import {
  ISetActiveBoard,
  IAddBoard,
  IAddCard,
  IEditCard,
  IDeleteCard,
  IEditTitle,
  IMoveTask,
} from './actionsTypes'

export type setActiveBoardActionCreator = (
  id: string | number
) => ISetActiveBoard

export type addBoardActionCreator = (title: string) => IAddBoard

export type addCardActionCreator = (
  listID: string | number,
  text: string
) => IAddCard

export type editCardActionCreator = (
  id: number | string,
  listID: number | string,
  newText: string
) => IEditCard

export type deleteCardActionCreator = (
  id: string | number,
  listID: string | number
) => IDeleteCard

export type editTitleActionCreator = (
  listID: string | number,
  newTitle: string
) => IEditTitle

export type moveTaskActionCreator = (
  droppableIdStart: string | number,
  droppableIdEnd: string | number,
  droppableIndexEnd: string | number,
  droppableIndexStart: string | number,
  draggableId: string | number,
  type: string | number
) => IMoveTask

//-----------------------------------
/* export type getBoardsActionCreator = () => IGetBoards
export type chooseBoardActionCreator = (id: string | number) => IChooseBoard
export type moveTaskActionCreator = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexEnd,
  droppableIndexStart,
  draggableId,
  type
) => IMoveTask */
