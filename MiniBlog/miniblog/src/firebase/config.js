import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpw-B8ziwmAvz7FVVwCDmxbWtIkBjDPOU",
  authDomain: "miniblog2-6af0a.firebaseapp.com",
  projectId: "miniblog2-6af0a",
  storageBucket: "miniblog2-6af0a.appspot.com",
  messagingSenderId: "494590995366",
  appId: "1:494590995366:web:5a36f5f0557e090f9fbd67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};