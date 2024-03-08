// file firebase.js
import { getFirestore, collection, query, limit, getDocs, orderBy, startAfter } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionRef = collection(db, 'events');

export const getData = async () => {
  const snapshot = await getDocs(collectionRef);
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

export const getElements = async (limitValue, cursor) => {
  const newQuery = cursor
    ? query(collectionRef, orderBy('name'), startAfter(cursor), limit(limitValue))
    : query(collectionRef, orderBy('name'), limit(limitValue));
    const querySnapshot = await getDocs(newQuery);
    const data = querySnapshot.docs.map((doc) => doc.data());
    const newCursor = querySnapshot.docs[querySnapshot.docs.length - 1];
    console.log(data, 'cursor0', cursor)
    return { data, cursor: newCursor };
  }



//file: event list
import React, { useState, useEffect }  from 'react'
import { getElements } from "../api/firebase";

const NUMBER_OF_EVENTS = 4

function EventList() {
  const [data, setData] = useState([])
  const [cursor, setCursor] = useState()
  const [isDone, setIsDone] = useState(false)
  useEffect(() => {
    getElements(NUMBER_OF_EVENTS).then(data => {
      setData(data.data)
      setCursor(data.cursor)
    })
  }, [])

  const handleClick = () => {
    getElements(NUMBER_OF_EVENTS, cursor).then(res => {
      if (res.data.length < NUMBER_OF_EVENTS || !res.cursor) {
        setIsDone(true)
        return
      }
      setData([...data, ...res.data])
      setCursor(res.cursor)
    })
  }

    return (
      <div className="attrContainer">
        {data.map((attraction, key) => <Attraction key={key} name={attraction.name} date={attraction.date} />)}

        { /* oце твоя кнопка, зміни дизайн їй*/}
        {!isDone && <button onClick={handleClick}> click me </button>}
      </div>
    );
  }

  export default AttractionsList;
