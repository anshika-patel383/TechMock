// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUD2-TTch0oNQGeLejrHBSnczVSJcS1xI",
  authDomain: "techmock-31102.firebaseapp.com",
  projectId: "techmock-31102",
  storageBucket: "techmock-31102.firebasestorage.app",
  messagingSenderId: "491908329804",
  appId: "1:491908329804:web:9bec86cac0eaba2f6edfe9",
  measurementId: "G-GS8S9B5GJM"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);