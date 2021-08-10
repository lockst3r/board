import {
  ADD_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
} from '../../actions/boardsActions'
import * as ActionType from '../../../constants/ActionType'
const initialState = ['board-0']

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_BOARD_SUCCEEDED: {
      return [...state, `board-${action.payload.id}`]
    }
    case DELETE_BOARD: {
      const { id } = action.payload

      return state.filter((el) => el !== id)
    }
    default:
      return state
  }
}

export default boardOrderReducer
