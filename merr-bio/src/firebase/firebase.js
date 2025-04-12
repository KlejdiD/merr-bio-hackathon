// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbT4ya0A9tzBaBwZ9WrfO--7FIXGz5g7c",
  authDomain: "merr-bio.firebaseapp.com",
  projectId: "merr-bio",
  storageBucket: "merr-bio.firebasestorage.app",
  messagingSenderId: "644133011490",
  appId: "1:644133011490:web:8ff5f2d2d9854db1d0ca7b",
  measurementId: "G-6Y5GQ0GPZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
