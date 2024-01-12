
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"


// const firebaseConfig = {
//     apiKey: "AIzaSyDvD4QbI360jChodQAz2-znJtd8jykASZM",
//     authDomain: "private-chat-1180b.firebaseapp.com",
//     projectId: "private-chat-1180b",
//     storageBucket: "private-chat-1180b.appspot.com",
//     messagingSenderId: "649999119296",
//     appId: "1:649999119296:web:2703d1ed03861eeebece25"
// };
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
