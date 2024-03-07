function Attraction({ name, img, description, date, place }) {

  // const dateFormatted = Date(date)
  return (
    <div class="attrItem">
      <div class="attrImg">
        <img src={img} alt="" />
      </div>
      <div class="attrMain">
        <div class="attrDate">{date}</div>
        <div class="attrTitle">{name}</div>
        <div class="attrDesc">{description}</div>
        <button class="attrMore"> MORE </button>
      </div>
      <div class="attrLocation">{place}</div>
    </div>
  );
}

export default Attraction;


