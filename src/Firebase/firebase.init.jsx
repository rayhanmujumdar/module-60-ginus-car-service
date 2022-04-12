// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbFcKkS3BExSJqEFJKWMbSrBsnLATWiiE",
  authDomain: "genius-car-services-b27fc.firebaseapp.com",
  projectId: "genius-car-services-b27fc",
  storageBucket: "genius-car-services-b27fc.appspot.com",
  messagingSenderId: "128255400685",
  appId: "1:128255400685:web:f286ded366babe748ccae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;