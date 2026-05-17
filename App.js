import React, { useState } from 'react';
import LogIn from './Login';
import Dashboard from './Dashboard';

function App() {
  // Global state to track if Alexis is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        // Once logged in, show the main app hub
        <Dashboard />
      ) : (
        // Show Login screen first
        <LogIn onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
