import * as ActionsType from '../../../constants/ActionType'

const initialState = null

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.FETCH_MEMBER_REQUESTED: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
