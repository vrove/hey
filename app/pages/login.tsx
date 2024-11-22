import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Adjust the path as necessary

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login Successful', 'You have successfully logged in.');
      router.replace('/homepage/home'); // Navigate to the home screen
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const Separator = () => (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Text style={styles.separatorText}>OR</Text>
      <View style={styles.line} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Link href="/">
          <Image source={require('../../assets/images/back.png')} style={styles.backButton} />
        </Link>
        <Text style={styles.title}>Login</Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../../assets/images/sms.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A1A8B0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require('../../assets/images/lock.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A1A8B0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={passwordVisible ? require('../../assets/images/eye-slash.png') : require('../../assets/images/eye.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Link href="/forgot-password" style={styles.linkForgot}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Link>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
        <Image source={require('../../assets/images/google.png')} style={styles.googleIcon} />
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Don't have an account? </Text>
        <Link href="/pages/signup" style={styles.link}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  backButton: {
    width: 9,
    height: 18,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F9FAFB', 
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: '#199A8E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#199A8E',
    textAlign: 'right',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#6C6C6C',
    fontFamily: 'Inter_400Regular',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  linkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#717784'
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#199A8E'
  },
});