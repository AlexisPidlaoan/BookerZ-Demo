import React, { useState } from 'react';

const C = {
  midnight: '#121358',
  navy: '#2F578A',
  darkNavy: '#232F72',
  teal: '#36ADA3',
  bg: '#f4f6fb',
  white: '#fff',
};

// ─── EventCard ────────────────────────────────────────────────────────────────
export const EventCard = ({ title, category, price, organizer, onSelect }) => (
  <div style={cardStyles.card} onClick={onSelect}>
    <div style={cardStyles.thumb}>
      <span style={{ fontSize: '28px' }}>🎟</span>
    </div>
    <div style={cardStyles.info}>
      <p style={cardStyles.category}>{category}</p>
      <h3 style={cardStyles.title}>{title}</h3>
      <p style={cardStyles.organizer}>by {organizer}</p>
      <p style={cardStyles.price}>₱{price.toFixed(2)}</p>
    </div>
  </div>
);

const cardStyles = {
  card: {
    display: 'flex',
    gap: '14px',
    backgroundColor: C.white,
    borderRadius: '14px',
    border: '0.5px solid rgba(35,47,114,0.1)',
    padding: '12px',
    marginBottom: '12px',
    cursor: 'pointer',
  },
  thumb: {
    width: '70px',
    height: '70px',
    backgroundColor: C.darkNavy,
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  info: { flex: 1 },
  category: { fontSize: '11px', fontWeight: '700', color: C.teal, margin: '0 0 2px' },
  title: { fontSize: '15px', fontWeight: '700', color: C.midnight, margin: '0 0 3px' },
  organizer: { fontSize: '12px', color: C.navy, margin: '0 0 4px' },
  price: { fontSize: '13px', fontWeight: '700', color: C.darkNavy, margin: 0 },
};


// ─── EventDetails ─────────────────────────────────────────────────────────────
export const EventDetails = ({ event, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('GCash');

  const payments = [
    { label: 'GCash',        icon: '💙' },
    { label: 'Maya',         icon: '💚' },
    { label: 'Bank Payment', icon: '🏦' },
    { label: 'BDO',          icon: '🔴' },
    { label: 'BPI',          icon: '🟡' },
  ];

  return (
    <div style={detailStyles.container}>

      {/* Header */}
      <div style={detailStyles.header}>
        <span style={detailStyles.backBtn} onClick={onBack}>←</span>
        <span style={detailStyles.headerTitle}>Event Details</span>
        <span style={detailStyles.heartBtn}>♡</span>
      </div>

      <div style={detailStyles.scroll}>

        {/* Hero */}
        <div style={detailStyles.hero}>
          <span style={{ fontSize: '60px' }}>🎟</span>
        </div>

        {/* People Going Badge */}
        <div style={detailStyles.badgeRow}>
          <div style={detailStyles.badge}>👥 People Going: 124</div>
        </div>

        <div style={detailStyles.body}>

          {/* Title */}
          <h1 style={detailStyles.title}>{event.title}</h1>

          {/* Meta Card */}
          <div style={detailStyles.metaCard}>
            <div style={detailStyles.metaRow}>
              <span style={detailStyles.metaIcon}>📅</span>
              <span style={detailStyles.metaText}>12/4/2026</span>
            </div>
            <div style={detailStyles.metaDivider} />
            <div style={detailStyles.metaRow}>
              <span style={detailStyles.metaIcon}>📍</span>
              <span style={detailStyles.metaText}>Bacolod, Philippines</span>
            </div>
            <div style={detailStyles.metaDivider} />
            <div style={detailStyles.metaRow}>
              <span style={detailStyles.metaIcon}>👤</span>
              <div>
                <div style={detailStyles.metaText}>{event.organizer}</div>
                <div style={detailStyles.metaSub}>Organizer</div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <p style={detailStyles.sectionLabel}>Mode of Payments</p>
          <p style={detailStyles.payUsing}>
            Pay Using: <strong>{paymentMethod}</strong>
          </p>
          <div style={detailStyles.payGrid}>
            {payments.map((p) => (
              <div
                key={p.label}
                style={{
                  ...detailStyles.payBtn,
                  ...(paymentMethod === p.label ? detailStyles.payBtnActive : {}),
                }}
                onClick={() => setPaymentMethod(p.label)}
              >
                <span style={{ fontSize: '22px' }}>{p.icon}</span>
                <span style={{
                  ...detailStyles.payLabel,
                  ...(paymentMethod === p.label ? detailStyles.payLabelActive : {}),
                }}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          {/* Book Button */}
          <button style={detailStyles.bookBtn}>
            ₱ {event.price.toFixed(2)}
          </button>

        </div>
      </div>
    </div>
  );
};

const detailStyles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: C.bg,
    fontFamily: 'sans-serif',
  },
  header: {
    backgroundColor: C.midnight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 16px',
  },
  backBtn: { fontSize: '22px', color: C.white, cursor: 'pointer' },
  headerTitle: { fontSize: '17px', fontWeight: '600', color: C.white },
  heartBtn: { fontSize: '22px', color: C.white, cursor: 'pointer' },
  scroll: { flex: 1, overflowY: 'auto', paddingBottom: '80px' },
  hero: {
    backgroundColor: C.darkNavy,
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeRow: {
    backgroundColor: C.white,
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '0.5px solid rgba(35,47,114,0.1)',
  },
  badge: {
    backgroundColor: C.darkNavy,
    color: C.white,
    borderRadius: '20px',
    padding: '6px 18px',
    fontSize: '13px',
    fontWeight: '600',
  },
  body: { padding: '16px' },
  title: { fontSize: '24px', fontWeight: '700', color: C.midnight, margin: '0 0 14px' },
  metaCard: {
    backgroundColor: C.white,
    borderRadius: '14px',
    padding: '14px',
    marginBottom: '20px',
    border: '0.5px solid rgba(35,47,114,0.1)',
  },
  metaRow: { display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0' },
  metaIcon: { fontSize: '18px', width: '28px', textAlign: 'center' },
  metaText: { fontSize: '14px', color: C.darkNavy, fontWeight: '500' },
  metaSub: { fontSize: '11px', color: C.navy, marginTop: '1px' },
  metaDivider: { height: '0.5px', backgroundColor: 'rgba(35,47,114,0.1)', margin: '2px 0' },
  sectionLabel: {
    fontSize: '12px',
    fontWeight: '700',
    color: C.darkNavy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0 0 6px',
  },
  payUsing: { fontSize: '13px', color: C.navy, margin: '0 0 12px' },
  payGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  payBtn: {
    width: 'calc(33% - 7px)',
    backgroundColor: C.white,
    border: '1px solid rgba(35,47,114,0.2)',
    borderRadius: '12px',
    padding: '12px 6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
  },
  payBtnActive: {
    backgroundColor: C.midnight,
    borderColor: C.midnight,
  },
  payLabel: { fontSize: '11px', color: C.darkNavy, fontWeight: '500', textAlign: 'center' },
  payLabelActive: { color: C.white },
  bookBtn: {
    width: '100%',
    backgroundColor: C.teal,
    color: C.white,
    border: 'none',
    borderRadius: '14px',
    padding: '16px',
    fontSize: '18px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};

export default EventDetails;