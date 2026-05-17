import React from 'react';

const BottomNav = ({ onMenuClick, onNavigate, currentPage }) => {
  return (
    <nav style={styles.bottomNav}>
      <div style={styles.navBtn} onClick={onMenuClick}>
        <span>☰</span>
        <small>Menu</small>
      </div>
      
      <div 
        style={{...styles.navBtn, color: currentPage === 'explore' ? '#007bff' : '#000'}} 
        onClick={() => onNavigate('explore')}
      >
        <span>🔍</span>
        <small>Search</small>
      </div>
      
      <div 
        style={{...styles.navBtn, color: currentPage === 'profile' ? '#007bff' : '#000'}} 
        onClick={() => onNavigate('profile')}
      >
        <span>👤</span>
        <small>Profile</small>
      </div>
    </nav>
  );
};
const styles = {
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
    zIndex: 5,
  },
  navBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flex: 1,
  }
};

export default BottomNav;
