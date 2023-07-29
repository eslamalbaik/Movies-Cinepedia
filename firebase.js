import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDFdvS3kqhMWHFknFEYwhmgnxJ-GRXTcmc",
  authDomain: "system-invoices.firebaseapp.com",
  projectId: "system-invoices",
  storageBucket: "system-invoices.appspot.com",
  messagingSenderId: "556713980344",
  appId: "1:556713980344:web:cc28539bf66d4fdca69f4d",
  measurementId: "G-JVVYRRRZQH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();



