import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';


export default function CreateAccountPage() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit() {
    console.log(email, password, name)
  }

  return (
        <div>
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
            <Link to="/">
              <button type="submit" className="loginButton bold">
                <p>Create an Account</p>
              </button>  
            </Link>
          </form>
          <Link to="/">
            <button className="forgotPasswordButton">
              <p>Already have an account? Login</p>
            </button>  
          </Link>
          
        </div>
  );
}

