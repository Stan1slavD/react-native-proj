// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxh_0W-WmC6bWA7xyHTKS7AGgFgujccqc",
  authDomain: "react-native-proj-f5f72.firebaseapp.com",
  projectId: "react-native-proj-f5f72",
  storageBucket: "react-native-proj-f5f72.appspot.com",
  messagingSenderId: "711547812268",
  appId: "1:711547812268:web:131902772b15bca2cbe209",
  measurementId: "G-XRQ77WKTTY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();


