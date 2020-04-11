import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default props => {
  // if logged in, reroute to homepage. if not, show route
  const isUserLoggedIn = false;
  return isUserLoggedIn ? <Redirect to="/" /> : <Route {...props} />  
 }
