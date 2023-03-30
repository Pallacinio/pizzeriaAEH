// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/storage';

// import { initializeApp } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAmzBV6sRdtEjCceHWZpNK7kYy_oQeAUPI',
  authDomain: 'bartoszpalacz-pizzeria-22612.firebaseapp.com',
  projectId: 'bartoszpalacz-pizzeria-22612',
  storageBucket: 'bartoszpalacz-pizzeria-22612.appspot.com',
  messagingSenderId: '774725421960',
  appId: '1:774725421960:web:fac0ac3084f9301697883d',
  measurementId: 'G-HN0X6P8YKV',
};

// const storage = firebase.storage();

export const fireStorage = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
