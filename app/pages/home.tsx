import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page</Text>
      <Link href="/profile" style={styles.link}>
        <Text style={styles.linkText}>Go to Profile</Text>
      </Link>
      <Link href="/settings" style={styles.link}>
        <Text style={styles.linkText}>Go to Settings</Text>
      </Link>
      <Button title="Logout" onPress={() => {}} />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#199A8E',
  },
});