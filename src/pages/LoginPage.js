import React from 'react';
import '../App.scss';

export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit() {
    console.log(email, password)
  }

  return (
    <div>
      <div className="top">
      </div>
      <div className="background">
        <div className="login">
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
            <button type="submit" className="loginButton bold">
              <p>Login</p>
            </button>
          </form>
          <button className="forgotPasswordButton">
            <p>Forgot Password?</p>
          </button>
          <button className="createAccountButton bold">
            <p>Create an Account</p>          
          </button>
        </div>
      </div>
    </div>
  );
}

