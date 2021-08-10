import * as ActionsType from '../../../constants/ActionType'
import { call, takeEvery, put,apply } from 'redux-saga/effects'
import { baseUrl } from '../../../utils/index'
import { api } from '../api'

export function* fetchMembers(action) {
  debugger  
  try {
    const request = yield call(fetch, `${baseUrl}/members`)
    const data = yield apply(request, request.json, []);
    debugger
    yield put({
      type: ActionsType.FETCH_MEMBERS_SUCCEEDED,
      payload: data,
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export function* membersSaga() {
  debugger
  yield takeEvery(ActionsType.FETCH_MEMBERS_REQUESTED, fetchMembers)
}
