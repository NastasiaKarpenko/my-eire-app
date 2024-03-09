function Attraction({ name, img, info, place, id }) {

  const style = {
    backgroundImage: `url('https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/attractions/${img}?raw=true')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };



  return (
    <div className="attrItem">
      <div className="attrMain">
        <div className="attrTitle">
          <h3>{name}</h3>
        </div>
        <div
          className="attrDesc"
          dangerouslySetInnerHTML={{ __html: info }}
        ></div>
      </div>
      <div className="attrLocation">{place}</div>
      <div className="attrImg" style={style}></div>
    </div>
  );
}

export default Attraction;
