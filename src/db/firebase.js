import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0U4-jb-4yclClxo0mh-lZ2jIKwKL-fkg",
  authDomain: "project-341480378113140565.firebaseapp.com",
  databaseURL: "https://project-341480378113140565.firebaseio.com",
  projectId: "project-341480378113140565",
  storageBucket: "project-341480378113140565.appspot.com",
  messagingSenderId: "120555341716",
  appId: "1:120555341716:web:8011154933999f058b3181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getData = async () => {
  const col = collection(db, 'events');
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map(doc => doc.data());
  return list;
}

// Auth
const auth = getAuth(app)
signInAnonymously(auth)
  .then(() => {
    console.log('Signed In as anonymus')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage)
  });
