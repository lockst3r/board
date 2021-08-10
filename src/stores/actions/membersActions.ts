import * as ActionsType from '../../constants/ActionType'

export const fetchMembers = () => {
  return {
    type: ActionsType.FETCH_MEMBER_REQUESTED,
  }
}
