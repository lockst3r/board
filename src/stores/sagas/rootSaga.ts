import { all, spawn } from 'redux-saga/effects'
import { listSaga } from './lists/listsSaga'

export default function* rootSaga() {
  const sagas = [listSaga]

  yield all(sagas.map((s) => spawn(s)))
}
