import React, { useState } from 'react';

const Notifications = ({ onBack }) => {
  // To test the "No Notification" design, change this to: const [notifs] = useState([]);
  const [notifs] = useState([
    { id: 1, message: 'Your booking for Alexis Gig is confirmed!', time: '2m ago' },
    { id: 2, message: 'New event added: Tech Expo 2026', time: '1h ago' },
    { id: 3, message: 'Ticket bought for Art Workshop', time: '5h ago' },
    { id: 4, message: 'Reminder: Piano Recital starts in 2 hours', time: '1d ago' },
  ]);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="calendar-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={onBack} className="rect-button" style={{ width: 'auto', padding: '5px 10px', marginRight: '10px' }}>←</button>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Notifications</h2>
        </div>
        <div style={{ fontSize: '20px', cursor: 'pointer' }}>⋮</div>
      </div>

      <div className="main-content">
        {notifs.length > 0 ? (
          <div>
            {notifs.map((notif) => (
              <div key={notif.id} className="notif-item">
                <div className="notif-circle"></div>
                <div style={{ flex: 1 }}>
                  <p className="notif-text">{notif.message}</p>
                  <span className="notif-time">{notif.time}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Design */
          <div className="empty-state">
            <div style={{ fontSize: '60px', marginBottom: '20px', opacity: 0.2 }}>🔔</div>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', color: '#333' }}>No notifications yet</h3>
            <p style={{ fontSize: '14px', color: '#999', lineHeight: '1.5' }}>
              We'll let you know when something important happens!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
