import Event from "./Event";
import { useState, useEffect } from 'react';
import { getData } from "../db/firebase";

const EventsList = () => {


  // TODO: Add data to firebase https://console.firebase.google.com/u/0/project/project-341480378113140565/firestore/data/~2Fevents~2FGNGIRg2e8yoYlXe5afGn 
  // TODO: uncomment this!!!
  // const [events, setEvents] = useState([])
  // useEffect(() => {
  //   getData().then(result => setEvents(result))
  // }, [])

  // console.log(data)

  const events = [
    {name: 'Claregalway Drama Festival 2024', 
    date: '14 - 22 Mar, 2024', 
    description:'Prepare to be enthralled at the Claregalway Drama Festival, running from Thursday, March 14th to Friday, March 22nd, 2024, from 8:00 pm to 10:30 pm nightly. Hosted at the Claregalway...', 
    place: 'Claregalway Community Centre, Claregalway H91 THH4, Ireland'},
    {name: 'St. Patrick’s Day Festival 2024', 
    date: '14 - 22 Mar, 2024', 
    description:'Prepare to be enthralled at the Claregalway Drama Festival, running from Thursday, March 14th to Friday, March 22nd, 2024, from 8:00 pm to 10:30 pm nightly. Hosted at the Claregalway...', 
    place: 'Claregalway Community Centre, Claregalway H91 THH4, Ireland'},
    {name: 'Múscailt – Annual Arts Festival', 
    date: '14 - 22 Mar, 2024', 
    description:'Prepare to be enthralled at the Claregalway Drama Festival, running from Thursday, March 14th to Friday, March 22nd, 2024, from 8:00 pm to 10:30 pm nightly. Hosted at the Claregalway...', 
    place: 'Claregalway Community Centre, Claregalway H91 THH4, Ireland'},
  ]

    return (
      <div className="eventContainer">
        
        <Event
          name={"NEW event"}
          description={"khsadkajs hdkjahd kajhsdkjahsk djhaskdjhaskjdha skjhaskdjh sad"}
          img={'https://picsum.photos/id/1018/1000/600/'}
          place={'Claregalway Community Centre, Claregalway H91 THH4, Ireland'}
          date={"2024"}
        />
         {events.map((event, key) => <Event key={key} name={event.name} img={event.img} description={event.description} place ={event.place}/>)

         }
      </div>
    );
  }
  
  export default EventsList;