// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "devdiary-a0ad8.firebaseapp.com",
  projectId: "devdiary-a0ad8",
  storageBucket: "devdiary-a0ad8.appspot.com",
  messagingSenderId: "309750055060",
  appId: "1:309750055060:web:adbcdbb4defaf921963481"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


