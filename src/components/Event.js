function Event({ name, img, description, date, place, eventURL }) {

  // const dateFormatted = Date(date)
  return (
    <div class="eventItem">
      <div class="eventImg">
        <img src="https://github.com/NastasiaKarpenko/my-eire-app/blob/6b56bf30aa231e54ba38fe3463c543f2b079b763/src/images/events/Forest%20Fest%202024%20.jpeg?raw=true" alt="events_picture" />
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


