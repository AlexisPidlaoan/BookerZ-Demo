import React from 'react';

const Profile = ({ onBack }) => {
  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.back}>← Back</button>

      <div style={styles.avatarCircle}>
        <span style={styles.avatarText}>ABB</span>
      </div>

      <p style={styles.name}>Alexis Bartolome Balazon</p>
      <div style={styles.followRow}>
        <span style={styles.followText}>Followers: 111</span>
        <span style={styles.followText}>Following: 13</span>
      </div>

      <button style={styles.editBtn}>Edit Profile ✏️</button>

      <div style={styles.body}>
        <p style={styles.sectionTitle}>About me</p>
        <p style={styles.aboutText}>
          Part-time hobbyist, full-time dreamer, and professional over-thinker.
          My interests range from retro gaming and digital art to obscure
          historical facts and experimental cooking.
        </p>

        <p style={styles.sectionTitle}>Interests</p>
        <div style={styles.tagsRow}>
          <span style={{...styles.tag, backgroundColor: '#CECBF6'}}>Jewelry</span>
          <span style={{...styles.tag, backgroundColor: '#B5D4F4'}}>Fighter Jets</span>
          <span style={{...styles.tag, backgroundColor: '#F5C4B3'}}>anime</span>
          <span style={{...styles.tag, backgroundColor: '#C0DD97'}}>aliens</span>
          <span style={{...styles.tag, backgroundColor: '#FAC775'}}>movies</span>
          <span style={{...styles.tag, backgroundColor: '#F4C0D1'}}>Others</span>
        </div>
      </div>

      <nav style={styles.bottomNav}>
        <span onClick={onBack}>Explore</span>
        <span>Tickets</span>
        <span style={{ fontWeight: 'bold' }}>Profile</span>
      </nav>
    </div>
  );
};

const styles = {
container: { padding: '20px', height: '100%', position: 'relative', backgroundColor: '#fff', fontFamily: 'sans-serif' },  back: { background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', marginBottom: '16px', padding: 0 },
  avatarCircle: { width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' },
  avatarText: { fontSize: '26px', fontWeight: 'bold', color: '#555' },
  name: { fontSize: '18px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 6px' },
  followRow: { display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '12px' },
  followText: { fontSize: '13px', color: '#555' },
  editBtn: { display: 'block', margin: '0 auto 20px', border: '1px solid #aaa', borderRadius: '8px', padding: '6px 20px', background: 'none', cursor: 'pointer', fontSize: '13px' },
  body: { overflowY: 'auto', paddingBottom: '60px' },
  sectionTitle: { fontSize: '15px', fontWeight: 'bold', marginBottom: '6px', marginTop: '10px' },
  aboutText: { fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 },
  tagsRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' },
  tag: { padding: '5px 12px', borderRadius: '15px', fontSize: '13px' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '15px', borderTop: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer' },
};

export default Profile;
