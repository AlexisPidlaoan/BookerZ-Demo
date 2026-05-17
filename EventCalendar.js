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
    <div className="dashboard-container">
      {/* HEADER WITH NAVIGATION */}
      <div className="calendar-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={onBack} className="rect-button" style={{ width: 'auto', padding: '5px 10px', marginRight: '10px' }}>←</button>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{monthNames[currentMonth]} {currentYear}</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => changeMonth(-1)} className="pill">⟨</button>
          <button onClick={() => changeMonth(1)} className="pill">⟩</button>
        </div>
      </div>

      <div className="main-content">
        <div className="week-labels">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="calendar-grid">
          {days.map((day, index) => {
            const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = eventDatabase.filter(e => e.date === dateString);
            const isToday = today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;

            return (
              <div key={index} 
                className="day-square"
                style={{
                  backgroundColor: day === null ? 'transparent' : '#fff',
                  border: day === null ? 'none' : '1px solid #2F578A',
                  borderColor: isToday ? '#36ADA3' : '#2F578A'
                }}
              >
                {day && (
                  <>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: isToday ? '#36ADA3' : '#121358' }}>{day}</div>
                    <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                      {dayEvents.map((_, i) => (
                        <div key={i} className="dot" />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <hr style={{ border: 'none', borderBottom: '1px solid #2F578A', margin: '0 20px' }} />

        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '15px', fontWeight: 'bold' }}>Scheduled for {monthNames[currentMonth]}</h3>
          {currentMonthEvents.length > 0 ? (
            currentMonthEvents.map(event => (
              <div key={event.id} style={{ display: 'flex', alignItems: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #2F578A', borderRadius: '12px', marginBottom: '10px' }}>
                <div style={{ width: '70px', fontSize: '11px', color: '#2F578A', fontWeight: 'bold' }}>{event.time}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{event.title}</div>
                  <div style={{
                    fontSize: '11px',
                    marginTop: '2px',
                    fontWeight: '600',
                    color: event.status === 'Ticket Bought' ? '#36ADA3' : '#2F578A'
                  }}>
                    {event.status}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#2F578A', marginTop: '20px', fontSize: '14px' }}>No events scheduled for this month.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
