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

const styles = {
  container: { height: '100%', overflowY: 'auto', backgroundColor: '#fff' },
  header: { display: 'flex', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #eee' },
  headerTitle: { margin: '0 0 0 15px', fontSize: '18px' },
  backBtn: { background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' },
  
  heroImage: { width: '100%', height: '180px', backgroundColor: '#333', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' },
  
  // Middle Social Proof Styles
  socialProofSection: { 
    textAlign: 'center', 
    padding: '15px 0', 
    backgroundColor: '#fff', 
    borderBottom: '1px solid #f0f0f0' 
  },
  sectionLabel: { fontWeight: 'bold', fontSize: '14px', marginBottom: '8px', color: '#333' },
  attendeeCount: { 
    backgroundColor: '#f8f9fa', 
    padding: '8px 20px', 
    borderRadius: '20px', 
    border: '1px solid #eee', 
    display: 'inline-block' 
  },

  detailsContent: { padding: '20px' },
  mainInfo: { marginBottom: '20px' },
  eventTitle: { fontSize: '24px', marginBottom: '10px' },
  eventMeta: { color: '#555', margin: '5px 0' },
  
  paymentSection: { marginBottom: '25px' },
  paymentOptions: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  paymentBtn: { padding: '8px 15px', borderRadius: '20px', border: 'none', fontSize: '12px', cursor: 'pointer', transition: '0.2s' },
  payUsing: { marginTop: '10px', fontSize: '13px' },

  ctaButton: { width: '100%', padding: '16px', color: '#fff', border: 'none', borderRadius: '12px', marginTop: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' },

  // Card Styles for Dashboard
  card: { border: '1px solid #eee', borderRadius: '15px', padding: '12px', marginBottom: '15px', cursor: 'pointer', display: 'flex', gap: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  imagePlaceholder: { width: '80px', height: '80px', backgroundColor: '#eee', borderRadius: '10px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' },
  cardInfo: { flex: 1 },
  cardTitle: { margin: '0 0 5px 0', fontSize: '16px' },
  categoryTag: { color: '#007bff', fontSize: '0.8em', fontWeight: 'bold' },
  cardPrice: { margin: '5px 0 0 0', fontWeight: 'bold' }
};

export default EventDetails;
