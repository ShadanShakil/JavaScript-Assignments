// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACUfiKM8hWt5iHkXjiNWVc3X4JqKvnDTE",
  authDomain: "project-1---learning.firebaseapp.com",
  projectId: "project-1---learning",
  storageBucket: "project-1---learning.appspot.com",
  messagingSenderId: "102954753824",
  appId: "1:102954753824:web:57eb34d96a2929bbe4c145",
  measurementId: "G-BXEX0SS5TR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

let signup_email = document.getElementById("signup-email");
let signup_password = document.getElementById("signup-password");
let signup_btn = document.getElementById("signup-btn");

let signin_email = document.getElementById("signin-email");
let signin_password = document.getElementById("signin-password");
let signin_btn = document.getElementById("signin-btn");

let auth_container = document.getElementById("auth-container");
let user_container = document.getElementById("user-container");

let user_email = document.getElementById("user-email");
let logout_btn = document.getElementById("logout-btn");
let showEmail = document.getElementById("showEmail");
let allusersdiv = document.getElementById("allusers");

let product_category = document.getElementById("product-category");
let product_name = document.getElementById("product-name");
let product_price = document.getElementById("product-price");
let add_btn = document.getElementById("add-btn");

signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click", signIn);
add_btn.addEventListener("click", addProduct);
logout_btn.addEventListener("click", logout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user is logged in.");
    auth_container.style.display = "none";
    user_container.style.display = "block";
    // product_container.style.display = "block";
    // user_email.innerHTML = user.email;
    showEmail.innerHTML = `<h1> welcome ${user.email} </h1>`;
    getAllUsers();

    // ...
  } else {
    console.log("user is not logged in.");
    auth_container.style.display = "block";
    user_container.style.display = "none";
    // product_container.style.display = "none";
  }
});

function createUserAccount() {
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      addData(signup_email.value, signup_password.value);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
}

function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

async function addData(email, pasword) {
  try {
    const userCollection = collection(db, "allusers");
    const userRef = await addDoc(userCollection, {
      email: email,
      pasword: pasword,
      created_at: new Date().toISOString(),
    });
    console.log("Document written with ID: ", userRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllUsers() {
  const userCollecton = collection(db, "allusers");
  const querySnapshot = await getDocs(userCollecton);
  allusersdiv.innerHTML = "";
  querySnapshot.forEach((user) => {
    console.log(`${user.id} => ${user.data().email}`);
    var addusers = `<div id=${user.id}>
  <p>${user.data().email}</p>
  <p>${user.data().pasword}</p>
  </div>`;
    allusersdiv.innerHTML += addusers;
  });
}

async function addProduct() {
  try {
    // Get the values from input elements
    const category = document.getElementById("product-category").value;
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;

    // Check if the inputs are valid
    if (!category || !name || !price) {
      throw new Error("Please fill in all fields.");
    }

    // Ensure price is a number
    const priceValue = parseFloat(price);
    if (isNaN(priceValue)) {
      throw new Error("Price must be a number.");
    }

    const userCollection = collection(db, "allProducts");
    const userRef = await addDoc(userCollection, {
      category: category,
      product: name,
      price: priceValue,
      created_at: new Date().toISOString(),
    });
    console.log("Document written with ID: ", userRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
