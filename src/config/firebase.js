import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCc0vKou50C-QTjSM51fPuW2pcmeO3PYk4",
  authDomain: "testfrondend.firebaseapp.com",
  projectId: "testfrondend",
  storageBucket: "testfrondend.appspot.com",
  messagingSenderId: "172532330033",
  appId: "1:172532330033:web:2105a58744faf12f4aef10"
});
const firebaseFirestore = getFirestore(firebaseApp);
const firebaseAuth = getAuth();
export { firebaseApp, firebaseFirestore, firebaseAuth};
