import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  limit,
  getDocs,
  orderBy,
  startAfter,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0U4-jb-4yclClxo0mh-lZ2jIKwKL-fkg",
  authDomain: "project-341480378113140565.firebaseapp.com",
  databaseURL: "https://project-341480378113140565.firebaseio.com",
  projectId: "project-341480378113140565",
  storageBucket: "project-341480378113140565.appspot.com",
  messagingSenderId: "120555341716",
  appId: "1:120555341716:web:8011154933999f058b3181",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, "events");

export const getData = async () => {
  const snapshot = await getDocs(collectionRef);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
};

// Auth
const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    console.log("Signed In as anonymus");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  });

export const getElements = async (limitValue, cursor) => {
  const newQuery = cursor
    ? query(
        collectionRef,
        orderBy("name"),
        startAfter(cursor),
        limit(limitValue)
      )
    : query(collectionRef, orderBy("name"), limit(limitValue));
  const querySnapshot = await getDocs(newQuery);
  const data = querySnapshot.docs.map((doc) => doc.data());
  const newCursor = querySnapshot.docs[querySnapshot.docs.length - 1];
  console.log(data, "cursor0", cursor);
  return { data, cursor: newCursor };
};
