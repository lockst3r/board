/* import { call, takeEvery, put, apply } from 'redux-saga/effects'
import { baseUrl } from '../../../utils/index'
import { api } from '../api'
import * as ActionTypes from '../../../constants/ActionType'

export function* addCard({ payload }) {
  try {
    const board = yield call(api, `${baseUrl}/bords`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: payload.id, title: payload.title }),
    })

    const { _id, title } = board
    debugger
    yield put({
      type: ActionTypes.ADD_BOARD_SUCCEEDED,
      payload: { _id, title },
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export function* boardsSaga() {
  yield takeEvery(ActionTypes.ADD_BOARD_REQUESTED, addBoard)
} */