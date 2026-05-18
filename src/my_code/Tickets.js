import React from 'react';

const Tickets = ({ onBack }) => {
  // Filtering for 'Ticket Bought' status
  const myTickets = [
    { id: 1, title: 'Alexis Gig', date: 'Dec 04, 2026', seat: 'V-12', barcode: 'AXG-7721' },
    { id: 2, title: 'Art Workshop', date: 'Dec 13, 2026', seat: 'Gen Ad', barcode: 'ART-9902' },
    { id: 3, title: 'Piano Recital', date: 'Dec 15, 2026', seat: 'A-04', barcode: 'PNO-1123' },
  ];

  return (
    <div className="dashboard-container">
      <div className="calendar-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={onBack} className="rect-button" style={{ width: 'auto', padding: '5px 10px', marginRight: '10px' }}>←</button>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>My Tickets</h2>
        </div>
      </div>

      <div className="main-content">
        <div className="tickets-container">
          {myTickets.map((ticket) => (
            <div key={ticket.id} className="ticket-stack">
              <div className="ticket-bg"></div>
              <div className="ticket-main">
                <div>
                  <h3 className="ticket-header-text">{ticket.title}</h3>
                  <div className="ticket-sub-row">
                    <span>Date: {ticket.date}</span>
                    <span>Seat No: {ticket.seat}</span>
                  </div>
                </div>
                <div className="barcode-placeholder">
                  |||| {ticket.barcode} ||||
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
