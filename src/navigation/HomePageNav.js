import React from 'react';
import '../App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'


export default function HomePageNav() {
  // use this to check if user is logged in
  const isUserLoggedIn = false;

  return (
    isUserLoggedIn ? <HomePage /> : <LoginPage />
   
  );
}

