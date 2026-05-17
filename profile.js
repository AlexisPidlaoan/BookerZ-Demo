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

export default Profile;
