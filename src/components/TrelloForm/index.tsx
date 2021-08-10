import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import { makeStyles, Box } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '../Common/Buttons/IconButton'
const useStyles = makeStyles({
  container: {
    width: 284,
    marginBottom: 8,
  },
  card: {
    minHeight: 85,
    padding: '6px 8px 2px',
  },
  textArea: {
    resize: 'none',
    width: '100%',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
  },
  buttonContainer: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
  },
  icon: {
    marginLeft: 8,
    cursor: 'pointer',
  },
})

const TrelloForm = ({ list, text = '', onChange, closeForm, children }) => {
  const classes = useStyles()
  const placeholder = list
    ? 'Enter list title...'
    : 'Enter a title for this card...'

  const handleFocus = (e) => {
    e.target.select()
  }

  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <Textarea
          placeholder={placeholder}
          autoFocus={true}
          onFocus={handleFocus}
          value={text}
          onChange={(e) => onChange(e)}
          onBlur={closeForm}
          className={classes.textArea}
        />
      </Card>
      <Box className={classes.buttonContainer}>
        {children}
        <IconButton
          icon={<CloseIcon />}
          onMouseDown={closeForm}
          size={'medium'}
        />
      </Box>
    </Box>
  )
}

export default TrelloForm
