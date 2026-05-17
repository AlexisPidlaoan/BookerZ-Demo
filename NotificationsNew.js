import React, { useState } from 'react';

const NotificationsNew = ({ onBack }) => {
  // 8 items to demonstrate scrollability with the custom wireframe scrollbar
  const [notifs] = useState([
    { id: 1, text: 'Notif goes here' },
    { id: 2, text: 'Notif goes here' },
    { id: 3, text: 'Notif goes here' },
    { id: 4, text: 'Notif goes here' },
    { id: 5, text: 'Notif goes here' },
    { id: 6, text: 'Notif goes here' },
    { id: 7, text: 'Notif goes here' },
    { id: 8, text: 'Notif goes here' },
  ]);

  return (
    <div className="wf-container">
      {/* Header */}
      <header className="wf-header">
        <button onClick={onBack} className="wf-back-btn">←</button>
        <h2 className="wf-title">Notifications</h2>
        <button className="wf-menu-btn">⋮</button>
      </header>
      <hr className="wf-header-line" />

      {/* Scrollable Notifications List */}
      <div className="wf-list-container">
        {notifs.map((notif) => (
          <React.Fragment key={notif.id}>
            <div className="wf-item">
              <div className="wf-circle" />
              <p className="wf-text">{notif.text}</p>
            </div>
            <hr className="wf-item-line" />
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Navigation styled exactly like the sketch */}
      <nav className="wf-bottom-nav">
        <div className="wf-nav-btn" onClick={onBack} style={{ cursor: 'pointer' }}>☰</div>
        <div className="wf-nav-btn" onClick={onBack} style={{ cursor: 'pointer' }}>🔍</div>
        <div className="wf-nav-btn" onClick={onBack} style={{ cursor: 'pointer' }}>
          <div className="wf-profile-circle">👤</div>
        </div>
      </nav>
    </div>
  );
};

export default NotificationsNew;
