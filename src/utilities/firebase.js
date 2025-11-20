// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd0MJLmr3BLvObi5_2Tlv_JLe1_XcgIfw",
  authDomain: "netflixgpt-9a471.firebaseapp.com",
  projectId: "netflixgpt-9a471",
  storageBucket: "netflixgpt-9a471.firebasestorage.app",
  messagingSenderId: "104656678012",
  appId: "1:104656678012:web:1533f903d60727d0deedf9",
  measurementId: "G-7HZJCB603W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();