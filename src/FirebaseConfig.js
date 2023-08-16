// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALCoMFK_EtnGxacSj34b_S-1_QwdDoI0k",
  authDomain: "nftmarket-dc968.firebaseapp.com",
  projectId: "nftmarket-dc968",
  storageBucket: "nftmarket-dc968.appspot.com",
  messagingSenderId: "476247982875",
  appId: "1:476247982875:web:29646ea8e083808d58c9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

