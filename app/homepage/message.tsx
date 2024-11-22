import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function Message() {
  const messages = [
    { sender: 'Dr. Geraldo K.', content: 'Your appointment is confirmed for tomorrow at 10 AM.' },
    { sender: 'Dr. Gradity M.', content: 'Please bring your previous medical records.' },
    { sender: 'Dr. Mayjen R.', content: 'Your test results are ready. Please visit the clinic.' },
    // Add more messages as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageCard}>
          <Text style={styles.sender}>{message.sender}</Text>
          <Text style={styles.content}>{message.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
});