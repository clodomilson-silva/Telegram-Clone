// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbxqs5_vQ-fxfwVt1o3ZodftidmFa7eO8",
  authDomain: "telegram-clone-36f70.firebaseapp.com",
  projectId: "telegram-clone-36f70",
  storageBucket: "telegram-clone-36f70.firebasestorage.app",
  messagingSenderId: "594590118649",
  appId: "1:594590118649:web:d1eb2c046814d6cd5c2828",
  measurementId: "G-WRCWDKD3JP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);