export const boardsSelector = (state: any) => {
  return state.boards
}

export const boardOrderSelector = (state: any) => {
  return state.boardOrder
}

export const modalSelector = (state: any) => {
  return state.modal.show
}