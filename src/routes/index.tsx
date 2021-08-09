import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import TrelloBoard from '../components/TrelloBoard'
import Home from '../components/Home/'

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={TrelloBoard} />
      </div>
    </Router>
  )
}
