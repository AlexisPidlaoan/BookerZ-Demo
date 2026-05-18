import React, { useState } from 'react';
import './styles.css'; 
import LogIn from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-frame"> 
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LogIn onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
