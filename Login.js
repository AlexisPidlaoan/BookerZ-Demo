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

const styles = {
  appFrame: { 
    maxWidth: '400px', 
    margin: '0 auto', 
    border: '1px solid #000', 
    height: '90vh', 
    overflow: 'hidden', 
    position: 'relative',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif'
  },
  container: { 
    padding: '20px', 
    height: '100%', 
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },
  header: { 
    borderBottom: '1px solid #ddd', 
    marginBottom: '15px' 
  },
  brandTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '32px',
    margin: '10px 0 5px 0',
    fontWeight: 'normal'
  },
  welcomeText: {
    fontSize: '16px',
    margin: '0 0 15px 0'
  },
  wireframeCard: {
    backgroundColor: '#bfbfbf',
    border: '1px solid #000',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center'
  },
  cardTitle: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'normal'
  },
  fieldGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  wireframeLabel: {
    fontSize: '12px',
    color: '#000'
  },
  rectButton: {
    width: '100%',
    padding: '12px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  rectInput: {
    width: '100%',
    padding: '10px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    fontSize: '14px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  bottomNav: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    display: 'flex', 
    justifyContent: 'space-around', 
    padding: '15px', 
    borderTop: '1px solid #ddd', 
    backgroundColor: '#fff' 
  },
  navItem: {
    fontSize: '14px',
    color: '#000',
    cursor: 'pointer'
  },
  navItemActive: {
    fontSize: '14px',
    color: '#000',
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
};

export default LogIn;
