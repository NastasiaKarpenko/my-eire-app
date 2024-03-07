function Attraction({ name, img, info, place }) {

    // const dateFormatted = Date(date)
    return (
      <div class="attrItem">
        <div class="attrImg">
          <img src={img} alt="" />
        </div>
        <div class="attrMain">
          <div class="attrTitle">{name}</div>
          <div class="attrDesc">{info}</div>
        </div>
        <div class="attrLocation">{place}</div>
      </div>
    );
  }
  
  export default Attraction;
  
  
  