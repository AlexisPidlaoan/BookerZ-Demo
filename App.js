import React, { useState } from 'react';
import './styles.css'; // Add this line
import LogIn from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-frame"> {/* Changed from style to className */}
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LogIn onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
