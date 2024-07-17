import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRTEBlgQ7GibgjDc4Q09_uMjuETFWlfl0",
    authDomain: "food-sharing-app-31588.firebaseapp.com",
    projectId: "food-sharing-app-31588",
    storageBucket: "food-sharing-app-31588.appspot.com",
    messagingSenderId: "497150298389",
    appId: "1:497150298389:web:55a2fab5b613dfc137811c",
    measurementId: "G-7EBHSKDD1D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  ref,
  uploadBytes,
  getDownloadURL,
};