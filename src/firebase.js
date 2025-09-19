// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf6Q8xM5yQnkv2HNoiiKKIAIf9Kx50V-U",
    authDomain: "app-financas-6af97.firebaseapp.com",
    projectId: "app-financas-6af97",
    storageBucket: "app-financas-6af97.firebasestorage.app",
    messagingSenderId: "670741245695",
    appId: "1:670741245695:web:444b515c458fd79edda6ca",
    measurementId: "G-HMH60V3NKH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
