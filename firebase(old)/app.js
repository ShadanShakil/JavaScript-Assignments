// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6C0f8juOZN0XLKxchIY09KtlLC_D41yc",
  authDomain: "project-1-43cdc.firebaseapp.com",
  projectId: "project-1-43cdc",
  storageBucket: "project-1-43cdc.appspot.com",
  messagingSenderId: "616986330388",
  appId: "1:616986330388:web:515404ec06689832aaae01",
  measurementId: "G-NH70QS6LV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// console.log("auth==>" , auth);
const loginPage = document.getElementsByClassName("login page");
const content = document.getElementsByClassName("content")
const logoutBtn = document.getElementById("logout-btn")
console.log(content);

const emailUp = document.getElementById("email up");
const passUp = document.getElementById("password up");
const signUpBtn = document.getElementById("signup");

const emailIn = document.getElementById("email");
const passIn = document.getElementById("password");
const signInBtn = document.getElementById("sign in");

signUpBtn.addEventListener("click", createUserAccount);
signInBtn.addEventListener("click", signIn);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in.");
    const uid = user.uid;
    console.log("uid==>", uid);
    loginPage.style.display = "none";
    content.style.display = "block";

    // ...
  } else {
    console.log("User is logged out.");
  }
});

function createUserAccount() {
  // console.log("email--->", emailUp.value);
  // console.log("password--->", passUp.value);

  createUserWithEmailAndPassword(auth, emailUp.value, passUp.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user--->", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}

function signIn(){
  signInWithEmailAndPassword(auth, emailIn.value, passIn.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("sign in error", errorMessage);
  });

}
