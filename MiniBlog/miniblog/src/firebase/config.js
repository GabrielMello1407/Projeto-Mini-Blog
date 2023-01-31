import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBg6-1Cw-MnzKs7U_3LY0QzJ6RlsIE7j10",
  authDomain: "miniblog-1f642.firebaseapp.com",
  projectId: "miniblog-1f642",
  storageBucket: "miniblog-1f642.appspot.com",
  messagingSenderId: "385398460273",
  appId: "1:385398460273:web:7a56aa680d40b2ea9af0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};