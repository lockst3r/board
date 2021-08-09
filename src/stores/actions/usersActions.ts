export const LOAD_USERS = 'LOAD_USERS'

export const loadUsers = (usersList: any) => {
  return {
    type: LOAD_USERS,
    payload: {
      usersList,
    },
  }
}
