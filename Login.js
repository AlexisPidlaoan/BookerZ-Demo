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
    fontFamily: 'sans-serif',
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    borderBottom: 'none',
  },
  brandTitle: {
    fontSize: '32px',
    marginBottom: '5px',
    fontWeight: 'bold',
    margin: 0,
  },
  welcomeText: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0 0 0',
  },
  wireframeCard: {
    backgroundColor: '#bfbfbf',
    border: '1px solid #000',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
  },
  cardTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  fieldGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rectButton: {
    width: '100%',
    padding: '12px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  wireframeLabel: {
    fontSize: '11px',
    color: '#333',
    marginTop: '4px',
    textTransform: 'uppercase',
  },
  rectInput: {
    width: '100%',
    padding: '12px',
    border: '2px solid #000',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #eee',
    backgroundColor: '#fff',
  },
  navItem: {
    cursor: 'pointer',
    fontSize: '14px',
  },
  navItemActive: {
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  }
};

export default LogIn;
