import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import BottomNav from './BottomNav';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const EVENT_DAYS = [4, 6, 9, 15, 24];

const UPCOMING = [
  { title: 'MassKara Music Fest 2026', date: 'Dec 4 · Bacolod', emoji: '🎵' },
  { title: 'PH Gaming Convention', date: 'Dec 9 · Manila', emoji: '🎮' },
  { title: 'Local Art Fair QC', date: 'Dec 15 · Quezon City', emoji: '🎨' },
  { title: 'Bacolod Fun Run 5K', date: 'Dec 24 · Bacolod', emoji: '🏃' },
];

export default function EventCalendar({ navigation }) {
  const [month, setMonth] = useState(11);
  const [year, setYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState(4);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

        {/* Calendar Card */}
        <View style={styles.calCard}>

          {/* Month Nav */}
          <View style={styles.calHeader}>
            <TouchableOpacity onPress={prevMonth} style={styles.navBtn}>
              <Text style={styles.navText}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.monthTitle}>{MONTHS[month]} {year}</Text>
            <TouchableOpacity onPress={nextMonth} style={styles.navBtn}>
              <Text style={styles.navText}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Day Labels */}
          <View style={styles.dayNamesRow}>
            {DAYS.map(d => (
              <Text key={d} style={styles.dayName}>{d}</Text>
            ))}
          </View>

          {/* Day Grid */}
          <View style={styles.grid}>
            {cells.map((day, i) => {
              if (!day) return <View key={`e-${i}`} style={styles.dayCell} />;
              const isSelected = day === selectedDay;
              const hasEvent = EVENT_DAYS.includes(day);
              return (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayCell,
                    isSelected && styles.dayCellSelected,
                    !isSelected && hasEvent && styles.dayCellEvent,
                  ]}
                  onPress={() => setSelectedDay(day)}
                >
                  <Text style={[
                    styles.dayText,
                    isSelected && styles.dayTextSelected,
                    !isSelected && hasEvent && styles.dayTextEvent,
                  ]}>
                    {day}
                  </Text>
                  {hasEvent && !isSelected && <View style={styles.dot} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Upcoming Events */}
        <Text style={styles.sectionLabel}>Upcoming Events</Text>
        {UPCOMING.map((item, i) => (
          <View key={i} style={styles.upcomingCard}>
            <View style={styles.upcomingThumb}>
              <Text style={{ fontSize: 22 }}>{item.emoji}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.upcomingTitle}>{item.title}</Text>
              <Text style={styles.upcomingDate}>📅 {item.date}</Text>
            </View>
          </View>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>

      <BottomNav navigation={navigation} active="calendar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb' },
  header: {
    backgroundColor: '#121358',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },
  backArrow: { fontSize: 22, color: '#fff' },
  headerTitle: { fontSize: 17, fontWeight: '600', color: '#fff' },
  calCard: {
    backgroundColor: '#fff',
    margin: 14,
    borderRadius: 16,
    padding: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(35,47,114,0.1)',
  },
  calHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  navBtn: { padding: 6 },
  navText: { fontSize: 26, color: '#36ADA3', fontWeight: '600' },
  monthTitle: { fontSize: 15, fontWeight: '700', color: '#121358' },
  dayNamesRow: { flexDirection: 'row', marginBottom: 6 },
  dayName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    color: '#2F578A',
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  dayCellSelected: { backgroundColor: '#121358', borderRadius: 10 },
  dayCellEvent: { backgroundColor: '#e8f7f6', borderRadius: 10 },
  dayText: { fontSize: 12, color: '#232F72' },
  dayTextSelected: { color: '#fff', fontWeight: '700' },
  dayTextEvent: { color: '#121358', fontWeight: '600' },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#36ADA3',
    marginTop: 1,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#232F72',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginLeft: 14,
    marginBottom: 10,
  },
  upcomingCard: {
    backgroundColor: '#fff',
    marginHorizontal: 14,
    marginBottom: 10,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#36ADA3',
    borderWidth: 0.5,
    borderColor: 'rgba(35,47,114,0.1)',
  },
  upcomingThumb: {
    width: 44,
    height: 44,
    backgroundColor: '#f4f6fb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcomingTitle: { fontSize: 13, fontWeight: '600', color: '#121358', marginBottom: 3 },
  upcomingDate: { fontSize: 12, color: '#2F578A' },
});