import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAdZNSkKGpEqITmBF3Opk_57jkezp6KfHI",
  authDomain: "frontend-6418b.firebaseapp.com",
  projectId: "frontend-6418b",
  storageBucket: "frontend-6418b.appspot.com",
  messagingSenderId: "1011910139307",
  appId: "1:1011910139307:web:379b95345338ee9864c6ee",
  measurementId: "G-31GHMGWZSD"
});
const firebaseFirestore = getFirestore(firebaseApp);
const firebaseAuth = getAuth();
export { firebaseApp, firebaseFirestore, firebaseAuth};
