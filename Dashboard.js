import React, { useState } from 'react';
import { EventCard, EventDetails } from './Event';
import Notifications from './NotificationsNew';
import Tickets from './Tickets'; // New Import
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import EventCalendar from './EventCalendar';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('explore');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const events = [
    { id: 1, title: 'Alexis Gig', category: 'Music', price: 149.99, organizer: 'Shama Cainneach' },
    { id: 2, title: 'Art Workshop', category: 'Art', price: 250.00, organizer: 'Creative Co.' },
    { id: 3, title: 'Piano Recital', category: 'Recital', price: 1000.00, organizer: 'NEU Music' },
    { id: 4, title: 'Afternoon Tea', category: 'Tea Party', price: 120.00, organizer: 'The Lounge' },
    { id: 5, title: 'Classic Car Show', category: 'Car Show', price: 50000.00, organizer: 'GearHeads' },
  ];

  const categories = ["Music", "Art", "Recital", "Tea Party", "Car Show"];

  const renderContent = () => {
    // If a user selects an event from Explore, show details regardless of current tab
    if (currentPage === 'details' && selectedEvent) {
      return <EventDetails event={selectedEvent} onBack={() => setCurrentPage('explore')} />;
    }

    switch (currentPage) {
      case 'calendar':
        return <EventCalendar onBack={() => setCurrentPage('explore')} />;
      
      case 'notifications':
        return <Notifications onBack={() => setCurrentPage('explore')} />;

      case 'tickets':
        return <Tickets onBack={() => setCurrentPage('explore')} />;
      
      case 'profile':
        return (
          <div className="profile-container">
            <div className="profile-avatar">👤</div>
            <h2 className="profile-name">Alexis Pidlaoan</h2>
            <p className="profile-bio">BSIT Student | NEU</p>
            <div className="profile-stats">
              <div className="stat-item"><span className="stat-value">5</span><span className="stat-label">Tickets</span></div>
              <div className="stat-item"><span className="stat-value">12</span><span className="stat-label">Wishlist</span></div>
            </div>
          </div>
        );

      case 'explore':
      default:
        return (
          <div className="dashboard-container">
            <header className="calendar-header">
              <h2 className="brand-title" style={{ margin: 0 }}>BookerZ</h2>
              <div onClick={() => setCurrentPage('notifications')} style={{ cursor: 'pointer', fontSize: '20px' }}>🔔</div>
            </header>
            
            <main className="main-content">
              <section style={{ padding: '10px 0' }}>
                <div className="horizontal-scroll">
                  {events.slice(0, 3).map(event => (
                    <div key={event.id} className="featured-card" onClick={() => {
                      setSelectedEvent(event);
                      setCurrentPage('details');
                    }}>
                      <div className="details-hero" style={{ height: '100%', borderRadius: '15px' }}>Event Image</div>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '15px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', borderRadius: '0 0 15px 15px', color: '#fff' }}>
                        <h4 style={{ margin: 0 }}>{event.title}</h4>
                        <p style={{ margin: '5px 0 0 0' }}>₱{event.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '10px 20px' }} />
              
              <div className="pill-container">
                <span className="pill pill-active">All</span>
                {categories.map(cat => <span key={cat} className="pill">{cat}</span>)}
              </div>

              <section style={{ padding: '20px' }}>
                {events.map(event => (
                  <EventCard 
                    key={event.id}
                    {...event}
                    onSelect={() => {
                      setSelectedEvent(event);
                      setCurrentPage('details');
                    }}
                  />
                ))}
              </section>
            </main>
          </div>
        );
    }
  };

  return (
    <div className="app-frame">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(target) => setCurrentPage(target)}
      />
      {renderContent()}
      {currentPage !== 'notifications' && (
        <BottomNav 
          currentPage={currentPage}
          onMenuClick={() => setIsSidebarOpen(true)}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Dashboard;
