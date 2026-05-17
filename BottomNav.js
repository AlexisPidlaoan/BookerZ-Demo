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

export default BottomNav;
