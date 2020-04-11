import React from 'react';
import '../App.scss';

export default function HomePage() {
  const isUserLoggedIn = false;

  return (
    <div>
      <div className="top">
      </div>
      <div className="background">
        <div className="login">
          <h2>Woohoo!</h2>
          <p className="lightGrey">You have successfully logged in</p>
        </div>
      </div>
    </div>
  );
}

