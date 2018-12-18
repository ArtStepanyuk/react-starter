import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../components/Layout'
import Protected from '../components/Protected'
import withLogin from '../hocs/withLogin'

const protectedRoute = withLogin(Protected)

const routes = (
  <Switch>
    <Route path="/" exact component={Layout} />
    <Route path="/protected" exact component={protectedRoute} />
  </Switch>
)

export default routes
