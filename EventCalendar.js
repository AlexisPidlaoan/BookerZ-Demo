import React, { useState } from 'react';

const EventCalendar = ({ onBack }) => {
  const today = new Date();
  
  // Track month and year in state to allow navigation
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Logic to move months
  const changeMonth = (offset) => {
    setViewDate(new Date(currentYear, currentMonth + offset, 1));
  };

  const eventDatabase = [
    { id: 1, date: '2026-12-04', title: 'Alexis Gig', status: 'Ticket Bought', time: '7:00 PM' },
    { id: 2, date: '2026-12-04', title: 'Tech Expo 2026', status: 'Upcoming', time: '10:00 AM' },
    { id: 3, date: '2026-12-13', title: 'Art Workshop', status: 'Upcoming', time: '2:00 PM' },
    { id: 4, date: '2026-12-15', title: 'Piano Recital', status: 'Upcoming', time: '4:00 PM' }
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) { days.push(null); }
  for (let i = 1; i <= daysInMonth; i++) { days.push(i); }

  const currentMonthEvents = eventDatabase.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
  });

  return (
    <div style={styles.container}>
      {/* HEADER WITH NAVIGATION */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <button onClick={onBack} style={styles.backBtn}>←</button>
          <h2 style={styles.headerTitle}>{monthNames[currentMonth]} {currentYear}</h2>
        </div>
        <div style={styles.navButtons}>
          <button onClick={() => changeMonth(-1)} style={styles.navBtn}>⟨</button>
          <button onClick={() => changeMonth(1)} style={styles.navBtn}>⟩</button>
        </div>
      </div>

      <div style={styles.scrollableBody}>
        <div style={styles.weekLabels}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} style={styles.weekLabel}>{day}</div>
          ))}
        </div>

        <div style={styles.calendarGrid}>
          {days.map((day, index) => {
            const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = eventDatabase.filter(e => e.date === dateString);
            const isToday = today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;

            return (
              <div key={index} style={{
                ...styles.daySquare,
                backgroundColor: day === null ? 'transparent' : '#fff',
                border: day === null ? 'none' : '1px solid #eee',
                borderColor: isToday ? '#007bff' : '#eee'
              }}>
                {day && (
                  <>
                    <div style={{...styles.dateLabel, color: isToday ? '#007bff' : '#000'}}>{day}</div>
                    <div style={styles.eventDots}>
                      {dayEvents.map((_, i) => (
                        <div key={i} style={styles.dot} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <hr style={styles.divider} />

        <div style={styles.eventsList}>
          <h3 style={styles.sectionTitle}>Scheduled for {monthNames[currentMonth]}</h3>
          {currentMonthEvents.length > 0 ? (
            currentMonthEvents.map(event => (
              <div key={event.id} style={styles.eventItem}>
                <div style={styles.eventTime}>{event.time}</div>
                <div style={styles.eventDetails}>
                  <div style={styles.eventTitle}>{event.title}</div>
                  <div style={{
                    ...styles.statusTag,
                    color: event.status === 'Ticket Bought' ? '#28a745' : '#007bff'
                  }}>
                    {event.status}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={styles.noEvents}>No events scheduled for this month.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { height: '100%', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' },
  header: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '15px 20px', 
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    zIndex: 2
  },
  headerLeft: { display: 'flex', alignItems: 'center' },
  headerTitle: { margin: '0 0 0 15px', fontSize: '18px', fontWeight: 'bold' },
  backBtn: { background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' },
  
  navButtons: { display: 'flex', gap: '10px' },
  navBtn: { 
    background: '#f0f0f0', 
    border: 'none', 
    borderRadius: '50%', 
    width: '35px', 
    height: '35px', 
    fontSize: '18px', 
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  scrollableBody: { flex: 1, overflowY: 'auto', paddingBottom: '100px' },
  weekLabels: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '15px 20px 5px', textAlign: 'center' },
  weekLabel: { fontSize: '12px', color: '#999', fontWeight: 'bold' },
  calendarGrid: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', padding: '10px 20px 20px' },
  daySquare: { height: '50px', borderRadius: '8px', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  dateLabel: { fontSize: '14px', fontWeight: 'bold' },
  eventDots: { display: 'flex', gap: '2px', justifyContent: 'center' },
  dot: { width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#000' },
  divider: { border: 'none', borderBottom: '1px solid #eee', margin: '0 20px' },
  eventsList: { padding: '20px' },
  sectionTitle: { fontSize: '16px', marginBottom: '15px', fontWeight: 'bold' },
  eventItem: { display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '12px', marginBottom: '10px' },
  eventTime: { width: '70px', fontSize: '11px', color: '#666', fontWeight: 'bold' },
  eventDetails: { flex: 1 },
  eventTitle: { fontSize: '14px', fontWeight: 'bold' },
  statusTag: { fontSize: '11px', marginTop: '2px', fontWeight: '600' },
  noEvents: { textAlign: 'center', color: '#999', marginTop: '20px', fontSize: '14px' }
};

export default EventCalendar;
