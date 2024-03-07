function Event({ name, img, description, date, place }) {

  // const dateFormatted = Date(date)
  return (
    <div class="eventItem">
      <div class="eventImg">
        <img src={img} alt="" />
      </div>
      <div class="eventMain">
        <div class="eventDate">{date}</div>
        <div class="eventTitle">{name}</div>
        <div class="eventDesc">{description}</div>
        <button class="eventMore"> MORE </button>
      </div>
      <div class="eventLocation">{place}</div>
    </div>
  );
}

export default Event;


