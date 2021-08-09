import { call, takeEvery, put, apply } from 'redux-saga/effects'
import { LOAD_USERS } from '../../actions/usersActions'

const baseUrl = 'https://602bc82eef26b40017f14afa.mockapi.io/api/v1'

export function* loadUsersList(): any {
  const request = yield call(fetch, `${baseUrl}/users`)
  const data = yield apply(request, request.json, [])

  yield put({
    type: LOAD_USERS,
    payload: data,
  })
}

export default function* usersSaga() {
  yield takeEvery(LOAD_USERS, loadUsersList)
}
