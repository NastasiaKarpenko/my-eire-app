function Attraction({ name, img, info, place, id }) {

  const isOdd = id % 2 === 1;

    // const dateFormatted = Date(date)
    return (
      <div className="attrItem">

        {
          isOdd && (<div className="attrImg">
          <img src={img} alt="" />
          </div>)
        }


        <div className="attrMain">
          <div className="attrTitle">{name}</div>
          <div className="attrDesc">{info}</div>
        </div>
        <div className="attrLocation">{place}</div>

        
        {
          !isOdd && (<div className="attrImg">
          <img src={img} alt="" />
          </div>)
        }

      </div>
    );
  }
  
  export default Attraction;
  
  
  