function Event({ name, img, description, date, place, eventURL }) {

  
  const style={
    backgroundImage: url(`https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/events/${img}?raw=true`),
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  
  return (
    <div class="eventItem">
      <div className="eventImg" style={style}>
      </div>
      <div class="eventMain">
        <div class="eventDate">{date}</div>
        <div class="eventTitle">{name}</div>
        <div class="eventDesc">{description}</div>
        <a href={eventURL} class="eventMore" target="_blank" rel="noopener noreferrer"> More details </a>
      </div>
      <div class="eventLocation">{place}</div>
    </div>
  );
}

export default Event;


