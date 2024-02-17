
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyAcqKEQJs_e_bBgfcfGbUzdy4etRaC3A48",

    authDomain: "chat-bea91.firebaseapp.com",

    projectId: "chat-bea91",

    storageBucket: "chat-bea91.appspot.com",

    messagingSenderId: "320930258142",

    appId: "1:320930258142:web:e92b4004c8cbbe8ef8364f"

};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
export const db = getFirestore();
