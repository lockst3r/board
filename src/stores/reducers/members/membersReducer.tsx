import * as ActionsType from '../../../constants/ActionType'

const initialState = null

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.FETCH_MEMBERS_SUCCEEDED: {
      debugger
      return action.payload
    }
    default: {
      return state
    }
  }
}
