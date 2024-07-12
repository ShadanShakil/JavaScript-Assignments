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
    collection,
    addDoc,
    getDocs,
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
    apiKey: "AIzaSyACUfiKM8hWt5iHkXjiNWVc3X4JqKvnDTE",
    authDomain: "project-1---learning.firebaseapp.com",
    projectId: "project-1---learning",
    storageBucket: "project-1---learning.appspot.com",
    messagingSenderId: "102954753824",
    appId: "1:102954753824:web:57eb34d96a2929bbe4c145",
    measurementId: "G-BXEX0SS5TR"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// getting elements 

// signup info 
var email_signup = document.getElementById("email");
var password_signup = document.getElementById("password");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var gender = document.getElementById("gender");
var dob = document.getElementById("dob");
var qualification = document.getElementById("qualification");
var btn_signup = document.getElementById("signup-btn");

// signin info 
var email_login = document.getElementById("signin-email");
var password_login = document.getElementById("signin-password");
var login_btn = document.getElementById("signin-btn");

// page functionality
var logout_btn = document.getElementById("logout");
var auth_container = document.getElementById("authentication");
var user_container = document.getElementById("user-container");


btn_signup.addEventListener("click", createUser);
login_btn.addEventListener("click", loginUser);
logout_btn.addEventListener("click", logoutUser);


function createUser(){
    createUserWithEmailAndPassword(auth, email_signup.value, password_signup.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });

}

function loginUser(){
    signInWithEmailAndPassword(auth, email_login.value, password_login.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

}

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      auth_container.style.display = "none";
      user_container.style.display = "block";
      // ...
    } else {
      // User is signed out
      // ...
      auth_container.style.display = "block";
      user_container.style.display = "none";
    }
  });
  
  function logoutUser(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("user is logged out.");
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
      
  }