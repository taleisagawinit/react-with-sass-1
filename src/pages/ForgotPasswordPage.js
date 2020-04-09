import React from 'react';
import '../App.scss';

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState('')

  function handleSubmit() {
    console.log(email)
  }

  return (
    <div>
      <div className="top">
      </div>
      <div className="background">
        <div className="login">
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
          <button className="forgotPasswordButton">
            <p>Already have an account? Login</p>
          </button>
        </div>
      </div>
    </div>
  );
}

