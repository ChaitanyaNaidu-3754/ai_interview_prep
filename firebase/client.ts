import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqaZsJ1zATJDqmSs4ffq4X2jvuP87ieDw",
  authDomain: "prepwise-ee21b.firebaseapp.com",
  projectId: "prepwise-ee21b",
  storageBucket: "prepwise-ee21b.firebasestorage.app",
  messagingSenderId: "926360707847",
  appId: "1:926360707847:web:f44c76a0d6c265d0541ba2",
  measurementId: "G-NJDWJRNBHL"
};



const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)