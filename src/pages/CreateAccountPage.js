import React from 'react';
import '../App.scss';

export default function CreateAccountPage() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit() {
    console.log(email, password, name)
  }

  return (
    <div>
      <div className="top">
      </div>
      <div className="background">
        <div className="login">
          <h2>Create an Account</h2>
          <p className="lightGrey">Sign up to continue</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              name
            </label>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            >
            </input>
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
            <p>Already have an account? Login</p>
          </button>
        </div>
      </div>
    </div>
  );
}

