function Attraction({ name, img, info, place }) {

    // const dateFormatted = Date(date)
    return (
      <div className="attrItem">
        <div className="attrImg">
          <img src={img} alt="" />
        </div>
        <div className="attrMain">
          <div className="attrTitle">{name}</div>
          <div className="attrDesc">{info}</div>
        </div>
        <div className="attrLocation">{place}</div>
      </div>
    );
  }
  
  export default Attraction;
  
  
  