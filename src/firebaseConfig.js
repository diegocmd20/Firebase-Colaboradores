// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI6XW4oBqWNa7cGfXEq0IJo2ZlcSGlHFw",
  authDomain: "crud-colaboradores-493e5.firebaseapp.com",
  projectId: "crud-colaboradores-493e5",
  storageBucket: "crud-colaboradores-493e5.firebasestorage.app",
  messagingSenderId: "920698207363",
  appId: "1:920698207363:web:45d05e6f6410123135afb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app