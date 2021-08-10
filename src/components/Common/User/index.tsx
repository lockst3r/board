import { Avatar, Box } from '@material-ui/core'
import * as React from 'react'

export const User = ({ avatar, name }) => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar src={avatar} />
      <span style={{ padding: 5 }}>{name}</span>
    </Box>
  )
}
