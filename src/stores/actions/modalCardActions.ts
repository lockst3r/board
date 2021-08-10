import * as ActionsType from '../../constants/ActionType'

export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SHOW_SUBMODAL = 'SHOW_SUBMODAL'
export const CLOSE_SUBMODAL = 'CLOSE_SUBMODAL'

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const showSubmodal = () => {
  return {
    type: SHOW_SUBMODAL,
  }
}

export const closeSubmodal = () => {
  return {
    type: CLOSE_SUBMODAL,
  }
}
