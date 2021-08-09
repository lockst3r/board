import * as React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from '../Common/Buttons/IconButton'
interface openForm {
  list: any
  onClick: () => void
  children: React.ReactNode
}
const useStyles = makeStyles({
  openFormButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    marginLeft: 8,
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: (props: openForm) => (props.list ? 1 : 0.5),
    color: (props: openForm) => (props.list ? 'white' : 'inherit'),
    backgroundColor: (props: openForm) =>
      props.list ? 'rgba(0,0,0,.15)' : 'inherit',
  },
})

interface openForm {
  list: any
  onClick: () => void
  children: React.ReactNode
}

const TrelloOpenForm: React.FC<openForm> = (props) => {
  const classes = useStyles(props)
  const { children, onClick } = props

  return (
    <Box onClick={onClick} className={classes.openFormButton}>
      <IconButton icon={<AddIcon />} />
      <Typography style={{ flexShrink: 0 }}>{children}</Typography>
    </Box>
  )
}

export default TrelloOpenForm
