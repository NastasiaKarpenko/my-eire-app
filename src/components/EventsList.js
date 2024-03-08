import Event from "./Event";
import { useState, useEffect } from "react";
import { getData } from "../db/firebase";

const EventsList = () => {
  // TODO: uncomment this!!!
  const [events, setEvents] = useState([])
  useEffect(() => {
    getData().then(result => setEvents(result))
  }, [])

  console.log(events)

  if (events.length > 0) {
    return (
    <>
    <div className="eventContainer">
        
        {events.map((event, key) => (
          <Event
            key={key}
            name={event.name}
            img={event.img}
            date={event.date}
            description={event.description}
            place={event.place}
            eventURL={event.eventURL}
          />
        ))}
    </div>
    <div className="eventBtnSpace">
      <a href="https://www.eventbrite.com/" className="eventBtn roboto-serif-ireland" target="_blank" rel="noopener noreferrer">More Events</a>
    </div>
    </>);
  }else{
    return(<h1>Data is loading... Give us a second ;)</h1>);
  }

  
  
};

export default EventsList;
