/* import { call, takeEvery, put, apply } from 'redux-saga/effects'
import { GET_BOARDS, GOT_BOARDS } from '../../actions/boardsActions'
import { baseUrl } from '../../../utils/index'

export function* gotBoards() {
  try {
    const requestBoards = yield call(fetch, `${baseUrl}/boards`)
    const requestActiveBoards = yield call(fetch, `${baseUrl}/active`)
    if (requestBoards.status === 200 && requestActiveBoards.status === 200) {
      const dataBoards = yield apply(requestBoards, requestBoards.json, [])
      const dataActiveBoard = yield apply(
        requestActiveBoards,
        requestActiveBoards.json,
        []
      )
      yield put({
        type: GOT_BOARDS,
        payload: {
          boardsList: dataBoards,
          active: dataActiveBoard,
        },
      })
    }
  } catch (e) {
    console.log(e.message)
  }
}

export function* boardsSaga() {
  yield takeEvery(GET_BOARDS, gotBoards) */
