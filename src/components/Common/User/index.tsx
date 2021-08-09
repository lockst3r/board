import { Avatar, Box } from '@material-ui/core'
import * as React from 'react'
function User() {
  return (
    <Box display="flex" alignItems="center">
      <Avatar />
      <span style={{ padding: 5 }}>{'Naruto Sobaka'}</span>
    </Box>
  )
}

export default User
