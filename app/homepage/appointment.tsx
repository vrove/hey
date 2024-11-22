import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Appointment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Page</Text>
      <View style={styles.appointmentContainer}>
        <Text style={styles.appointmentTitle}>Upcoming Appointment</Text>
        <Text style={styles.appointmentDetails}>Doctor: Dr. Geraldo K.</Text>
        <Text style={styles.appointmentDetails}>Date: 2023-12-01</Text>
        <Text style={styles.appointmentDetails}>Time: 10:00 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  appointmentContainer: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointmentDetails: {
    fontSize: 16,
    color: '#666',
  },
});