import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SHOW_SUBMODAL,
  CLOSE_SUBMODAL,
} from '../../actions/modalCardActions'
const initialState = {
  show: false,
  showSubmodal: false,
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
    case SHOW_SUBMODAL:
      return {
        ...state,
        ['showSubmodal']: true,
      }
    case CLOSE_SUBMODAL:
      return {
        ...state,
        ['showSubmodal']: false,
      }
    default:
      return state
  }
}

export default modalReducer
