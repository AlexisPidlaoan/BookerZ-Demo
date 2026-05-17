import React, { useState } from 'react';

// Component for the list item (Explore Page)
export const EventCard = ({ title, category, price, onSelect }) => {
  return (
    <div style={styles.card} onClick={onSelect}>
      <div style={styles.imagePlaceholder}>Event Logo</div>
      <div style={styles.cardInfo}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.categoryTag}>{category}</p>
        <p style={styles.cardPrice}>Starting at: ₱{price}</p>
      </div>
    </div>
  );
};

// Component for the expanded details view
export const EventDetails = ({ event, onBack }) => {
  const [attendees, setAttendees] = useState(124);
  const [paymentMethod, setPaymentMethod] = useState('GCash');

  return (
    <div style={styles.container}>
      {/* Header with Back Button */}
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backBtn}>←</button>
        <h2 style={styles.headerTitle}>Event Details</h2>
      </div>

      {/* Hero Image */}
      <div style={styles.heroImage}>Hero Image / Logo</div>
      
      {/* Social Proof Section - MOVED TO MIDDLE */}
      <div style={styles.socialProofSection}>
        <p style={styles.sectionLabel}>People Going</p>
        <div style={styles.attendeeCount}>👤 {attendees}</div>
      </div>

      <div style={styles.detailsContent}>
        {/* Event Header Info */}
        <div style={styles.mainInfo}>
          <h1 style={styles.eventTitle}>{event.title}</h1>
          <p style={styles.eventMeta}>📅 12/4/2026</p>
          <p style={styles.eventMeta}>📍 Bacolod, Philippines</p>
          <p style={styles.eventMeta}>👤 {event.organizer} (Organizer)</p>
        </div>

        {/* Payment Methods Section */}
        <div style={styles.paymentSection}>
          <p style={styles.sectionLabel}>Mode of payments</p>
          <div style={styles.paymentOptions}>
            {['GCash', 'Maya', 'Bank Payment'].map((method) => (
              <button 
                key={method}
                onClick={() => setPaymentMethod(method)}
                style={{
                  ...styles.paymentBtn,
                  backgroundColor: paymentMethod === method ? '#000' : '#f0f0f0',
                  color: paymentMethod === method ? '#fff' : '#000'
                }}
              >
                {method}
              </button>
            ))}
          </div>
          <p style={styles.payUsing}>Pay Using: <strong>{paymentMethod}</strong></p>
        </div>
        
        {/* Booking CTA */}
        <button 
          style={{
            ...styles.ctaButton, 
            backgroundColor: event.price > 500 ? '#ff4d4d' : '#007bff' 
          }}
          onClick={() => alert(`Redirecting to ${paymentMethod}...`)}
        >
          Book for ₱{event.price}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
