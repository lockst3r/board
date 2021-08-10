import * as ActionsType from '../../constants/ActionType'

export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

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
