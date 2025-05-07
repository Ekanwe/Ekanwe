// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyRgBYPs6qUJpjr9rW4F8nE4s6YwY-g-k",
  authDomain: "ekanwe-app.firebaseapp.com",
  projectId: "ekanwe-app",
  storageBucket: "ekanwe-app.firebasestorage.app",
  messagingSenderId: "177322625777",
  appId: "1:177322625777:web:3e8a67a4d99cf388b13750",
  measurementId: "G-17MSPHGKVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const functions = getFunctions(app);
export const db = getFirestore(app);
export const storage = getStorage(app);