// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBibHuuG75ANKC-ah4BWiLDuRNPOV1tXF4',
  authDomain: 'zyvo-c4186.firebaseapp.com',
  projectId: 'zyvo-c4186',
  storageBucket: 'zyvo-c4186.appspot.com',
  messagingSenderId: '33138282147',
  appId: '1:33138282147:web:db1b01bee2647dc70b3916',
  measurementId: 'G-6QJ7WGFY1P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
