import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>

      {/* Top Bar */}
      <div style={styles.topBar}>
        <span style={styles.topBarTitle}>Welcome</span>
      </div>

      <div style={styles.scroll}>

        {/* Tab Switch */}
        <div style={styles.tabRow}>
          <div
            style={{ ...styles.tab, ...(tab === 'signup' ? styles.tabActive : {}) }}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </div>
          <div
            style={{ ...styles.tab, ...(tab === 'login' ? styles.tabActive : {}) }}
            onClick={() => setTab('login')}
          >
            Log In
          </div>
        </div>

        <div style={styles.formBox}>
          {tab === 'login' ? (
            <>
              <label style={styles.fieldLabel}>Email</label>
              <input
                style={styles.input}
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label style={styles.fieldLabel}>Password</label>
              <input
                style={styles.input}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button style={styles.mainBtn} onClick={onLogin}>Log In</button>
              <div style={styles.dividerRow}>
                <div style={styles.dividerLine} />
                <span style={styles.dividerText}>or</span>
                <div style={styles.dividerLine} />
              </div>
              <button style={styles.socialBtn}>🌐 &nbsp; Continue with Google</button>
              <button style={styles.socialBtn}>📘 &nbsp; Continue with Facebook</button>
              <button style={styles.otherBtn}>Other Options</button>
            </>
          ) : (
            <>
              <p style={styles.signupSubtitle}>Create your account</p>
              <button style={styles.mainBtn} onClick={onLogin}>Sign Up</button>
              <div style={styles.dividerRow}>
                <div style={styles.dividerLine} />
                <span style={styles.dividerText}>or</span>
                <div style={styles.dividerLine} />
              </div>
              <button style={styles.socialBtn}>🌐 &nbsp; Sign up with Google</button>
              <button style={styles.socialBtn}>📘 &nbsp; Sign up with Facebook</button>
              <button style={styles.socialBtn}>✉️ &nbsp; Sign up with Email</button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

const C = {
  midnight: '#121358',
  navy: '#2F578A',
  darkNavy: '#232F72',
  teal: '#36ADA3',
  bg: '#f4f6fb',
  white: '#fff',
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    border: '1px solid #000',
    height: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: C.bg,
    fontFamily: 'sans-serif',
  },
  topBar: {
    backgroundColor: C.midnight,
    padding: '20px 16px 16px',
    textAlign: 'center',
  },
  topBarTitle: {
    color: C.white,
    fontSize: '22px',
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
    overflowY: 'auto',
    padding: '24px',
  },
  tabRow: {
    display: 'flex',
    backgroundColor: '#e2e6f0',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '24px',
  },
  tab: {
    flex: 1,
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '14px',
    color: C.navy,
    cursor: 'pointer',
  },
  tabActive: {
    backgroundColor: C.midnight,
    color: C.white,
  },
  formBox: {
    backgroundColor: C.white,
    borderRadius: '16px',
    padding: '20px',
    border: '0.5px solid rgba(35,47,114,0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  fieldLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: C.navy,
    marginBottom: '6px',
  },
  input: {
    backgroundColor: C.bg,
    borderRadius: '10px',
    border: '1px solid rgba(35,47,114,0.15)',
    padding: '12px',
    fontSize: '14px',
    color: C.midnight,
    marginBottom: '14px',
    outline: 'none',
  },
  mainBtn: {
    backgroundColor: C.midnight,
    color: C.white,
    border: 'none',
    borderRadius: '12px',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '16px',
  },
  dividerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  dividerLine: {
    flex: 1,
    height: '0.5px',
    backgroundColor: 'rgba(35,47,114,0.2)',
  },
  dividerText: {
    fontSize: '12px',
    color: C.navy,
  },
  socialBtn: {
    border: '1px solid rgba(35,47,114,0.2)',
    borderRadius: '12px',
    padding: '13px',
    fontSize: '14px',
    fontWeight: '500',
    color: C.darkNavy,
    backgroundColor: C.bg,
    cursor: 'pointer',
    marginBottom: '10px',
  },
  otherBtn: {
    background: 'none',
    border: 'none',
    color: C.teal,
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    padding: '10px',
  },
  signupSubtitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: C.midnight,
    textAlign: 'center',
    marginBottom: '16px',
  },
};