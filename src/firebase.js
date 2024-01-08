// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_lFhYMZW309VE_YRVzgLM5oimqFvYF8",
  authDomain: "personal-finance-tracker-2cb70.firebaseapp.com",
  projectId: "personal-finance-tracker-2cb70",
  storageBucket: "personal-finance-tracker-2cb70.appspot.com",
  messagingSenderId: "143849615155",
  appId: "1:143849615155:web:c876697536bdcda1d8d846",
  measurementId: "G-SZEVNFT77D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };