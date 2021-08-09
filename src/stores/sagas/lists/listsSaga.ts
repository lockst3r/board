import { takeEvery, put, select, StrictEffect } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'
import {
  ADD_LIST,
  DRAG_HAPPENED,
  DELETE_LIST,
  CREATE_LIST,
  REMOVE_LIST,
} from '../../actions/listsActions'
import { IMoveTask } from '../../../types/actionsTypes'
export function* deleteList({ payload }) {
  const { listID } = payload
  const state = yield select()
  const boardID = state.activeBoard
debugger
  yield put({
    type: DELETE_LIST,
    payload: {
      listID,
      boardID,
    },
  })
}

export function* moveTask({ payload }: IMoveTask) {
  const {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexEnd,
    droppableIndexStart,
    draggableId,
    type,
  } = payload
  const state = yield select()
  const boardID = state.activeBoard

  yield put({
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      boardID,
    },
  })
}

export function* addList({ payload }) {
  const { title } = payload
  const state = yield select()
  const boardID = state.activeBoard
  const id = uuidv4()

  yield put({
    type: ADD_LIST,
    payload: {
      title,
      boardID,
      id,
    },
  })
}

export function* listSaga(): Generator<StrictEffect> {
  yield takeEvery(REMOVE_LIST, deleteList)
  yield takeEvery('MOVE_TASK', moveTask)
  yield takeEvery(CREATE_LIST, addList)
}
