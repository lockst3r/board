import ReactDOM from 'react-dom'
import App from './App'
import { store, persistor, sagaMiddleware } from './stores'
import { Provider } from 'react-redux'
import rootSaga from './stores/sagas/rootSaga'
import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/theme'
import { PersistGate } from 'redux-persist/integration/react'

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
