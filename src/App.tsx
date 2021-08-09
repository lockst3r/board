import * as React from 'react'
import { AppRouter } from './routes/index'
import { makeStyles } from '@material-ui/core'
import { background } from './styles/colors'

const useStyles = makeStyles({
  main: {
    backgroundColor: background,
    height: '100vh',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <main className={classes.main}>
      <AppRouter />
    </main>
  )
}

export default App
