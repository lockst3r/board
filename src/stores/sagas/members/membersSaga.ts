import * as ActionsType from '../../../constants/ActionType'
import { call, takeEvery, put, apply } from 'redux-saga/effects'
import { baseUrl } from '../../../utils/index'
import { api } from '../api'

export function* fetchMembers() {
  try {
    const board = yield call(api, `${baseUrl}/members`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '',
    })

    const { _id, name, avatar } = board
    debugger
    yield put({
      type: ActionsType.FETCH_MEMBER_SUCCEEDED,
      payload: { _id, name, avatar },
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export function* membersSaga() {
  yield takeEvery(ActionsType.ADD_BOARD_REQUESTED, fetchMembers)
}
