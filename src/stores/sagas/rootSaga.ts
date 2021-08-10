import { all, spawn } from 'redux-saga/effects'
import { listSaga } from './lists/listsSaga'
import { boardsSaga } from './boards/boardsSaga'
import { membersSaga } from './members/membersSaga'

export default function* rootSaga() {
  const sagas = [listSaga, boardsSaga, membersSaga]

  yield all(sagas.map((s) => spawn(s)))
}
