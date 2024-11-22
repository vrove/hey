import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.logoText}>SageWood Medical</Text>
      </View>
      <View>
        <Text style={styles.titleText}>Let's Get Started</Text>
      </View>
      <View>
        <Text style={styles.subtitleText}>Login to enjoy the features we’ve provided, and stay healthy!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/pages/login" style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/pages/signup" style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 66,
    alignSelf: 'center',
  },
  logoText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    color: '#199A8E',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    marginLeft: 50,
    marginRight: 50,
    color: '#6C6C6C',
  },
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#199A8E',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: '#199A8E',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#199A8E',
    textAlign: 'center',
  },
});