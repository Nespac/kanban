// src/firebaseInit.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCjXK9fT1MiVkAY1RAEbhyRJwi_AfsUl38",
  authDomain: "kanban-5bd54.firebaseapp.com",
  projectId: "kanban-5bd54",
  storageBucket: "kanban-5bd54.appspot.com",
  messagingSenderId: "974523534953",
  appId: "1:974523534953:web:68febd1e2012650b425cf8",
  measurementId: "G-26WL40ZQ82",
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;
