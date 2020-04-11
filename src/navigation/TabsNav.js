import React from 'react';
import '../App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function TabsNav() {
  // todo: add all the routes for the tabs here
  // all tabs have to check if they are logged in to show the screen, if not show a message screen to log in
  return (
    <Router>
      {/* <Route exact path="/" component={HomePageNav}/>
      <Route exact path="/expenses" component={ExpensesPage}/>
      <Route exact path="/income" component={IncomePage}/> */}

    </Router>
   
  );
}

