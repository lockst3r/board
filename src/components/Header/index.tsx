import * as React from 'react'
import { connect } from 'react-redux'
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  FormControl,
  Select,
  makeStyles,
  Button,
  Box,
  ButtonGroup,
} from '@material-ui/core'
import { boardsListSelector, activeBoardSelector } from '../../stores/selectors/index'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import User from '../Common/User/index'
const useStyles = makeStyles({
  select: {
    backgroundColor: '#ffffff',
    marginLeft: 10,
  },
})

const _Header = ({ boards, getBoards, activeBoard, chooseBoard }) => {
  const classes = useStyles()

  React.useEffect(() => {
    getBoards()
  }, [getBoards])

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center" p={1}>
              <Typography variant="h6" color="inherit">
                Dashboard:
              </Typography>

              <FormControl variant="outlined">
                <Select
                  className={classes.select}
                  id="active"
                  native
                  value={activeBoard[0].id || ''}
                  onChange={(event) => {
                    const { value } = event.target
                    chooseBoard(value)
                  }}
                >
                  {boards.map((board) => {
                    return (
                      <option key={board.id} value={board.id}>
                        {board.title}
                      </option>
                    )
                  })}
                </Select>
              </FormControl>
              <ButtonGroup
                orientation="vertical"
                color="secondary"
                aria-label="vertical contained primary button group"
                variant="contained"
              >
                <Button>One</Button>
                <Button>Two</Button>
              </ButtonGroup>
              <Button>
                <AddIcon />
              </Button>
              <Button>
                <DeleteIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <User />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

const mapState = (state) => {
  return {
    boards: boardsListSelector(state),
    activeBoard: activeBoardSelector(state),
  }
}

const mapDispatch = {}

export const Header = connect(mapState, mapDispatch)(React.memo(_Header))
