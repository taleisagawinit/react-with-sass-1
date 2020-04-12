import React from 'react';
import '../App.scss';

export default function HomePage() {
  const isUserLoggedIn = false;

  return (
        <div>
          <h2>Woohoo!</h2>
          <p className="lightGrey">You have successfully logged in</p>
        </div>
  );
}

