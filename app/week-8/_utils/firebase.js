// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4LOEp2aOXH9bjfrH1HPMM8pP0vGN2S4",
  authDomain: "cprg306-assignments-63785.firebaseapp.com",
  projectId: "cprg306-assignments-63785",
  storageBucket: "cprg306-assignments-63785.appspot.com",
  messagingSenderId: "790947032012",
  appId: "1:790947032012:web:580fc50c3a78321fed4b69",
  measurementId: "G-9FGBYE4J6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);