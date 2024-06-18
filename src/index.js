import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Lodging from './views/lodging'
import Information from './views/information'
import Entertainment from './views/entertainment'
import Homepage from './views/homepage'
import Transportation from './views/transportation'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Lodging} exact path="/lodging" />
        <Route component={Information} exact path="/information" />
        <Route component={Entertainment} exact path="/entertainment" />
        <Route component={Homepage} exact path="/" />
        <Route component={Transportation} exact path="/transportation" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
