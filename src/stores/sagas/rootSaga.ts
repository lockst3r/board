import { all, spawn } from 'redux-saga/effects'
import { listSaga } from './lists/listsSaga'
import { boardsSaga } from './boards/boardsSaga'

export default function* rootSaga() {
  const sagas = [listSaga, boardsSaga]

  yield all(sagas.map((s) => spawn(s)))
}
