import { ADD_BOARD, EDIT_BOARD, DELETE_BOARD } from '../../actions/boardsActions'
import { REHYDRATE } from 'redux-persist/lib/constants'
const initialState = ['board-0']

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    /* case REHYDRATE:{
      return [ ...state, persistedState: action.payload ]
    } */
    case ADD_BOARD: {
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
