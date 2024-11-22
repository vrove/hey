import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!isChecked) {
      Alert.alert('Error', 'You must agree to the terms and conditions.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Signup Successful', 'You have successfully signed up.');
      router.replace('/homepage/home'); // Navigate to the home screen
    } catch (error) {
      Alert.alert('Signup Failed', error.message);
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
        <Text style={styles.title}>Sign Up</Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
          <Image source={require('../../assets/images/profile.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#A1A8B0"
            value={name}
            onChangeText={setName}
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require('../../assets/images/sms.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
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
            placeholder="Enter your password"
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
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setChecked(!isChecked)} style={styles.checkbox}>
            {isChecked && <Image source={require('@/assets/images/check.png')} style={styles.checkIcon} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>I agree to the medidoc Terms of Service and Privacy Policy</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Already have an account? </Text>
        <Link href="/login" style={styles.link}>
          <Text style={styles.signUpText}>Login</Text>
        </Link>
      </View>
      <Separator />
      <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
        <Image source={require('../../assets/images/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  checkIcon: {
    width: 16,
    height: 16,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#6C6C6C',
  },
});