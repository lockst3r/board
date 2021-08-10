import { call, takeEvery, put, apply } from 'redux-saga/effects'
import { baseUrl } from '../../../utils/index'
import { api } from '../api'
import * as ActionTypes from '../../../constants/ActionType'

export function* addBoard({ payload }) {
  try {
    const board = yield call(api, `${baseUrl}/boards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: payload.id, title: payload.title }),
    })
   debugger
    const { _id, title } = board
    debugger
    yield put({
      type: ActionTypes.ADD_BOARD_SUCCEEDED,
      payload: { id: _id, title },
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export function* boardsSaga() {
  yield takeEvery(ActionTypes.ADD_BOARD_REQUESTED, addBoard)
}
