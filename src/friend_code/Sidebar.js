import React from 'react';

const MENU = [
  { label: 'Explore Events', icon: '🔍', page: 'explore' },
  { label: 'Your Tickets',   icon: '🎟', page: 'tickets' },
  { label: 'Notifications',  icon: '🔔', page: 'notifications' },
  { label: 'Wishlist',       icon: '♡',  page: 'wishlist' },
  { label: 'My Calendar',    icon: '📅', page: 'calendar' },
  { label: 'Settings',       icon: '⚙️', page: 'settings' },
  { label: 'Help & Support', icon: '❓', page: 'help' },
];

export default function Sidebar({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const handleNav = (page) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div style={styles.backdrop} onClick={onClose} />

      {/* Drawer */}
      <div style={styles.drawer}>

        {/* Top Bar */}
        <div style={styles.topBar}>
          <span style={styles.closeBtn} onClick={onClose}>✕</span>
        </div>

        {/* Logo */}
        <div style={styles.logoRow}>
          <div style={styles.logoBox}><span style={{ fontSize: '20px' }}>🎟</span></div>
          <span style={styles.appName}>BookerZ</span>
        </div>

        <div style={styles.divider} />

        {/* Menu */}
        <div style={styles.menuList}>
          {MENU.map((item) => (
            <div
              key={item.page}
              style={styles.menuItem}
              onClick={() => handleNav(item.page)}
            >
              <span style={styles.menuIcon}>{item.icon}</span>
              <span style={styles.menuLabel}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={styles.divider} />

        {/* Account Row */}
        <div style={styles.accountRow}>
          <div style={styles.avatar}><span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>ZY</span></div>
          <div style={{ flex: 1 }}>
            <div style={styles.accountName}>Account name</div>
            <div style={styles.accountEmail}>user@email.com</div>
          </div>
          <span style={styles.logoutText} onClick={() => handleNav('logout')}>Log out</span>
        </div>

      </div>
    </>
  );
}

const C = {
  midnight: '#121358',
  navy: '#2F578A',
  teal: '#36ADA3',
  white: '#fff',
};

const styles = {
  backdrop: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 10,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '75%',
    backgroundColor: C.white,
    zIndex: 11,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
  },
  topBar: {
    backgroundColor: C.midnight,
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  closeBtn: {
    color: C.white,
    fontSize: '18px',
    cursor: 'pointer',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
  },
  logoBox: {
    width: '40px',
    height: '40px',
    backgroundColor: C.teal,
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: '22px',
    fontWeight: '700',
    color: C.midnight,
  },
  divider: {
    height: '0.5px',
    backgroundColor: 'rgba(35,47,114,0.15)',
    margin: '0 20px',
  },
  menuList: {
    flex: 1,
    paddingTop: '8px',
    overflowY: 'auto',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '14px 20px',
    cursor: 'pointer',
    fontSize: '15px',
    color: C.midnight,
  },
  menuIcon: { fontSize: '20px', width: '28px', textAlign: 'center' },
  menuLabel: { fontWeight: '500' },
  accountRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#232F72',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountName: { fontSize: '14px', fontWeight: '600', color: C.midnight },
  accountEmail: { fontSize: '12px', color: C.navy, marginTop: '1px' },
  logoutText: { fontSize: '12px', color: '#c0392b', fontWeight: '600', cursor: 'pointer' },
};