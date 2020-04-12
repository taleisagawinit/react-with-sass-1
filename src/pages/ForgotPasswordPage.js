import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState('')

  function handleSubmit() {
  }

  return (
        <div>
          <h2>Forgot Password</h2>
          <p className="lightGrey">Enter your email to recover your password</p>
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
            <button type="submit" className="loginButton bold">
              <p>Send Email</p>
            </button>
          </form>
          <Link to="/">
            <button className="forgotPasswordButton">
              <p>Already have an account? Login</p>
            </button>  
          </Link>
          
        </div>
  );
}

