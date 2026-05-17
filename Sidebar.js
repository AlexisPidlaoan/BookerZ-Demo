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

const styles = {
  overlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9
  },
  sidebar: {
    position: 'absolute', top: 0, left: 0, width: '75%', height: '100%',
    backgroundColor: '#fff', zIndex: 10, padding: '20px', boxSizing: 'border-box',
    display: 'flex', flexDirection: 'column'
  },
  topSection: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px'
  },
  appTitle: { margin: 0, fontSize: '22px', fontWeight: 'bold' },
  closeBtn: { fontSize: '28px', border: 'none', background: 'none', cursor: 'pointer' },
  navLinks: { flex: 1, overflowY: 'auto' },
  navItem: {
    padding: '15px 10px', fontSize: '16px', borderBottom: '1px solid #f9f9f9',
    display: 'flex', alignItems: 'center', cursor: 'pointer'
  },
  icon: { marginRight: '15px' },
  profileSection: {
    display: 'flex', alignItems: 'center', padding: '20px 0',
    borderTop: '1px solid #eee', marginTop: 'auto'
  },
  avatar: {
    fontSize: '30px', backgroundColor: '#f0f0f0', width: '50px', height: '50px',
    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  profileText: { marginLeft: '15px' },
  accountName: { margin: 0, fontSize: '16px' },
  subText: { margin: 0, fontSize: '12px', color: '#888' }
};

export default Sidebar;
