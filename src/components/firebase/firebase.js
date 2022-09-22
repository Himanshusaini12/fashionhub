// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkUhV0FQO87FMVxDW_VyEKUsxvYceMDXw",
  authDomain: "hsclothing-cd2b5.firebaseapp.com",
  projectId: "hsclothing-cd2b5",
  storageBucket: "hsclothing-cd2b5.appspot.com",
  messagingSenderId: "119221014058",
  appId: "1:119221014058:web:dc74a8036ce2cae220fd53",
  measurementId: "G-3WEZE62VLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
};
