import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import CreateAccountPage from './pages/CreateAccountPage'
import LoginRoute from './routes/LoginRoute'
import HomePageNav from './navigation/HomePageNav'

function App() {

  return (
    <div className="container">
      <Router>
        <Route exact path="/" component={HomePageNav}/>
        <LoginRoute exact path="/signup" component={CreateAccountPage}/>
        <LoginRoute exact path="/forgotpassword" component={ForgotPasswordPage}/>
      </Router> 
    </div>
    
   
  );
}

export default App;
