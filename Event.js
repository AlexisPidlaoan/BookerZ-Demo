import React, { useState } from 'react';

// Component for the list item (Explore Page)
export const EventCard = ({ title, category, price, onSelect }) => {
  return (
    <div className="event-card" onClick={onSelect}>
      <div className="image-placeholder" style={{ width: '60px', height: '60px', backgroundColor: '#ddd', borderRadius: '8px' }}>Logo</div>
      <div className="event-card-info">
        <h3 className="event-card-title">{title}</h3>
        <p className="category-tag">{category}</p>
        <p className="event-card-price">Starting at: ₱{price}</p>
      </div>
    </div>
  );
};

// Component for the expanded details view
export const EventDetails = ({ event, onBack }) => {
  const [attendees, setAttendees] = useState(124);
  const [paymentMethod, setPaymentMethod] = useState('GCash');

  return (
    <div className="dashboard-container">
      {/* Header with Back Button */}
      <div className="calendar-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={onBack} className="rect-button" style={{ width: 'auto', padding: '5px 10px', marginRight: '10px' }}>←</button>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Event Details</h2>
        </div>
      </div>

      <div className="main-content">
        {/* Hero Image */}
        <div className="details-hero">Hero Image / Logo</div>
        
        {/* Social Proof Section */}
        <div className="social-proof-section">
          <p style={{ fontSize: '12px', color: '#999', margin: '0 0 5px 0' }}>People Going</p>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>👤 {attendees}</div>
        </div>

        <div style={{ padding: '20px' }}>
          {/* Event Header Info */}
          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{event.title}</h1>
            <p style={{ color: '#555', margin: '5px 0' }}>📅 12/4/2026</p>
            <p style={{ color: '#555', margin: '5px 0' }}>📍 Bacolod, Philippines</p>
            <p style={{ color: '#555', margin: '5px 0' }}>👤 {event.organizer} (Organizer)</p>
          </div>

          {/* Payment Methods Section */}
          <div style={{ marginBottom: '25px' }}>
            <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '10px' }}>Mode of payments</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['GCash', 'Maya', 'Bank Payment'].map((method) => (
                <button 
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  style={{
                    padding: '8px 15px',
                    borderRadius: '20px',
                    border: 'none',
                    fontSize: '12px',
                    cursor: 'pointer',
                    backgroundColor: paymentMethod === method ? '#36ADA3' : '#f0f4f8',
                    color: paymentMethod === method ? '#fff' : '#121358'
                  }}
                >
                  {method}
                </button>
              ))}
            </div>
            <p style={{ marginTop: '10px', fontSize: '13px' }}>Pay Using: <strong>{paymentMethod}</strong></p>
          </div>
          
          {/* Booking CTA */}
          <button 
            className="pay-button"
            style={{
              backgroundColor: event.price > 500 ? '#232F72' : '#36ADA3' 
            }}
            onClick={() => alert(`Redirecting to ${paymentMethod}...`)}
          >
            Book for ₱{event.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
