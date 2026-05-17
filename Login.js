import React, { useState } from 'react';

const LogIn = ({ onLogin }) => {
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'signup') {
    return (
      <div style={styles.appFrame}>
        <div style={styles.container}>
          <header style={{ ...styles.header, textAlign: 'center', borderBottom: 'none' }}>
            <h1 style={styles.brandTitle}>BookerZ</h1>
            <p style={styles.welcomeText}>Welcome</p>
          </header>

          <div style={styles.wireframeCard}>
            <h3 style={styles.cardTitle}>Sign Up?</h3>
            
            <div style={styles.fieldGroup}>
              <button style={styles.rectButton} onClick={onLogin}>
                Continue with Google
              </button>
              <span style={styles.wireframeLabel}>Google</span>
            </div>

            <div style={styles.fieldGroup}>
              <button style={styles.rectButton} onClick={onLogin}>
                Continue with Facebook
              </button>
              <span style={styles.wireframeLabel}>Facebook</span>
            </div>

            <div style={styles.fieldGroup}>
              <input type="text" placeholder="enter email..." style={styles.rectInput} />
              <span style={styles.wireframeLabel}>Email</span>
            </div>
          </div>

          <nav style={styles.bottomNav}>
            <span style={styles.navItemActive}>Explore</span>
            <span style={styles.navItem}>Tickets</span>
            <span style={styles.navItem}>Profile</span>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appFrame}>
      <div style={styles.container}>
        <header style={{ ...styles.header, textAlign: 'center', borderBottom: 'none' }}>
          <h1 style={styles.brandTitle}>BookerZ</h1>
          <p style={styles.welcomeText}>Welcome</p>
        </header>

        <div style={styles.wireframeCard}>
          <h3 style={styles.cardTitle}>Log In</h3>

          <div style={styles.fieldGroup}>
            <input type="email" placeholder="enter email..." style={styles.rectInput} />
            <span style={styles.wireframeLabel}>Email</span>
          </div>

          <div style={styles.fieldGroup}>
            <input type="password" placeholder="enter password..." style={styles.rectInput} />
            <span style={styles.wireframeLabel}>Password</span>
          </div>

          <div style={styles.fieldGroup}>
            <button style={styles.rectButton} onClick={onLogin}>
              Log In
            </button>
            <span style={styles.wireframeLabel}>Submit</span>
          </div>

          <div style={{ ...styles.fieldGroup, marginTop: '20px' }}>
            <button style={styles.rectButton} onClick={() => setCurrentPage('signup')}>
              View Options
            </button>
            <span style={styles.wireframeLabel}>Other Options</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogIn;
