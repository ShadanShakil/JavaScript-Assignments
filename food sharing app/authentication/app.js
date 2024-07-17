import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
} from "../utils/utils.js";

const goto_signup = document.getElementById("goto-signup");
const goto_signin = document.getElementById("goto-signin");
const signup_form = document.getElementById("signup-form");
const signin_form = document.getElementById("signin-form");
const signup_container = document.getElementById("signup-container");
const signin_container = document.getElementById("signin-container");

goto_signup.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");
  signup_container.style.display = "flex";
  signin_container.style.display = "none";
});

goto_signin.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click1");
  signup_container.style.display = "none";
  signin_container.style.display = "flex";
});

signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  let email = e.target[0].value;
  let password = e.target[1].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "/";
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
});

signin_form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  let email = e.target[0].value;
  let password = e.target[1].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = "/";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
