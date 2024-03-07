import Event from "./Event";
import { useState, useEffect } from 'react';

// API
const baseURL = 'https://www.eventbriteapi.com/v3/events/search/';
const token = 'APHIHYYVAZ4C52F65PE2';
const URL = `${baseURL}?token=${token}&location.country=IE`

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST'
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

const EventsList = () => {
  const { data, loading, error } = useFetchData('https://www.eventbrite.com/api/v3/promoted/events')
  
  console.log(data)
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