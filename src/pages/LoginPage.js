import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit() {
    localStorage.setItem('email', email)
    localStorage.setItem('pass', password)
  }

  return (
        <div>
          <h2>Welcome Back</h2>
          <p className="lightGrey">Login to continue</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              email
            </label>
            <input 
            type="email" 
            id="email" 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            >
            </input>
            <label htmlFor="password">
              Password
            </label>
            <input 
            type="password"
            id="password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            >
            </input>
            <Link to="/home">
              <button type="submit" className="loginButton bold">
                <p>Login</p>
              </button>
            </Link>
            
          </form>
          <Link to="/forgotpassword">
            <button className="forgotPasswordButton">
              <p>Forgot Password?</p>
            </button>  
          </Link>
          <Link to="signup">
            <button className="createAccountButton bold">
              <p>Create an Account</p>          
            </button>  
          </Link>
          
        </div>
  );
}

