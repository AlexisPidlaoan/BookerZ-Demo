import React, { useState } from 'react';
import { EventCard, EventDetails } from './Event';
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
    switch (currentPage) {
      case 'calendar':
        return <EventCalendar onBack={() => setCurrentPage('explore')} />;
      
      case 'details':
        return <EventDetails event={selectedEvent} onBack={() => setCurrentPage('explore')} />;

      case 'explore':
      default:
        return (
          <div style={styles.container}>
            <header style={styles.header}>
              <h2 style={styles.logo}>BookerZ</h2>
            </header>
            <main style={styles.mainContent}>
              <section style={styles.featuredSection}>
                <div style={styles.horizontalScroll}>
                  {events.slice(0, 3).map(event => (
                    <div key={event.id} style={styles.bigSquare} onClick={() => {
                      setSelectedEvent(event);
                      setCurrentPage('details');
                    }}>
                      <div style={styles.imagePlaceholder}>Event Image</div>
                      <div style={styles.featuredInfo}>
                        <h4>{event.title}</h4>
                        <p>₱{event.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <hr style={styles.divider} />
              <div style={styles.pillContainer}>
                <span style={styles.pillActive}>All</span>
                {categories.map(cat => <span key={cat} style={styles.pill}>{cat}</span>)}
              </div>
              <section style={styles.eventList}>
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
    <div style={styles.appFrame}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(target) => setCurrentPage(target)}
      />
      {renderContent()}
      <BottomNav 
        currentPage={currentPage}
        onMenuClick={() => setIsSidebarOpen(true)}
        onNavigate={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

const styles = {
  appFrame: { maxWidth: '400px', margin: '0 auto', border: '1px solid #000', height: '90vh', overflow: 'hidden', position: 'relative', backgroundColor: '#fff', fontFamily: 'sans-serif' },
  container: { height: '100%', display: 'flex', flexDirection: 'column' },
  header: { padding: '15px 20px 5px', textAlign: 'center' },
  logo: { fontSize: '24px', fontWeight: 'bold', margin: 0 },
  mainContent: { flex: 1, overflowY: 'auto', paddingBottom: '80px' },
  featuredSection: { padding: '10px 0' },
  horizontalScroll: { display: 'flex', overflowX: 'auto', gap: '15px', padding: '0 20px', scrollSnapType: 'x mandatory' },
  bigSquare: { minWidth: '280px', height: '200px', backgroundColor: '#333', borderRadius: '15px', color: '#fff', position: 'relative', overflow: 'hidden', scrollSnapAlign: 'start', flexShrink: 0 },
  imagePlaceholder: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#444' },
  featuredInfo: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '15px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' },
  divider: { border: 'none', borderBottom: '1px solid #eee', margin: '10px 20px' },
  pillContainer: { display: 'flex', gap: '10px', overflowX: 'auto', padding: '10px 20px' },
  pillActive: { backgroundColor: '#000', color: '#fff', padding: '8px 18px', borderRadius: '20px', fontSize: '13px' },
  pill: { border: '1px solid #ddd', padding: '8px 18px', borderRadius: '20px', fontSize: '13px' },
  eventList: { padding: '0 20px' }
};

export default Dashboard;
