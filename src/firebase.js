// Import the functions you need from the SDKs you need
import 'firebase/compat/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const auth = firebase.initializeApp({
          apiKey: "AIzaSyDOEuFwnNdNKBi7TIx54FvsXW6ws4csAb4",
          authDomain: "whatchat-41f0b.firebaseapp.com",
          projectId: "whatchat-41f0b",
          storageBucket: "whatchat-41f0b.appspot.com",
          messagingSenderId: "986603101934",
          appId: "1:986603101934:web:ec509afa2f70b748495dff"
    }).auth();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);