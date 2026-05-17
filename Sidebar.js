import React from 'react';

const Sidebar = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const navItems = [
    { label: 'Explore Events', icon: '🔍', target: 'explore' },
    { label: 'Tickets', icon: '🎟️', target: 'tickets' },
    { label: 'Notifications', icon: '🔔', target: 'notifications' },
    { label: 'Wishlist', icon: '❤️', target: 'wishlist' },
    { label: 'My Calendar', icon: '📅', target: 'calendar' }, // Target set to calendar
    { label: 'Settings', icon: '⚙️', target: 'settings' },
    { label: 'Help & Support', icon: '❓', target: 'support' }
  ];

  const handleItemClick = (target) => {
    onNavigate(target); // Calls the navigation function in Dashboard
    onClose(); // Closes sidebar after selection
  };

  return (
    <>
      <div style={styles.overlay} onClick={onClose} />
      
      <div style={styles.sidebar}>
        <div style={styles.topSection}>
          <h2 style={styles.appTitle}>BookerZ</h2>
          <button onClick={onClose} style={styles.closeBtn}>×</button>
        </div>
        
        <nav style={styles.navLinks}>
          {navItems.map((item, index) => (
            <div 
              key={index} 
              style={styles.navItem} 
              onClick={() => handleItemClick(item.target)}
            >
              <span style={styles.icon}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        <div style={styles.profileSection}>
          <div style={styles.avatar}>👤</div>
          <div style={styles.profileText}>
            <h3 style={styles.accountName}>Alexis B.</h3>
            <p style={styles.subText}>View Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
