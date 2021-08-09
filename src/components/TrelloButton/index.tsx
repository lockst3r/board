import React from 'react'
import Button from '@material-ui/core/Button'

/* onst StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
` */

const TrelloButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" onMouseDown={onClick}>
      {children}
    </Button>
  )
}

export default TrelloButton
