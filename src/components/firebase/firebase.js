// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  onSnapshot,
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  Firestore,
} from "firebase/firestore";
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
const db = getFirestore(app);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creatinf the user", error.message);
    }
  }
  return userDocRef;
};
