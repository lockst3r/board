/* import * as React from 'react'
import { AppRouter } from './routes/index'
import { makeStyles } from '@material-ui/core'
import { background } from './styles/colors'
import { Spinner } from './components/Common/Spinner/index'
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles({
  main: {
    backgroundColor: background,
    height: '100vh',
    minWidth: 1400,
  },
})

const SnackBar: React.FC = ({ store }) => {
  const classes = useStyles()
  const store = store.splir()

  return (
    <>
      <Snackbar
        open={true}
        autoHideDuration={6000}
        onClose={handleClose}
        message={'loh'}
      />
    </>
  )
}

export default App
 */
