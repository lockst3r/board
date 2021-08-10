import { SHOW_MODAL, CLOSE_MODAL } from '../../actions/modalActions'
const initialState = {
  show: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ['show']: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        ['show']: false,
      }
    default:
      return state
  }
}

export default modalReducer
