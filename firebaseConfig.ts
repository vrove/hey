import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCR4sURXVUt1ImhmpHOFCArwfDmmrsLxrk",
  authDomain: "medical-app-c05c4.firebaseapp.com",
  projectId: "medical-app-c05c4",
  storageBucket: "medical-app-c05c4.firebasestorage.app",
  messagingSenderId: "309392144522",
  appId: "1:309392144522:web:4c2df047328c1fd2811573",
  measurementId: "G-P1STGV896L"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});