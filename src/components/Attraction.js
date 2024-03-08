function Attraction({ name, img, info, place, id }) {
  const isOdd = id % 2 === 1;

  const style = {
    backgroundImage: `url('${img}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const buildImg = () => (
    <div className="attrImg" style={style}>
      {img}
      {/* <img src={img} alt="attractions" /> */}
    </div>
  );

  return (
    <div className="attrItem">
      {isOdd && buildImg()}
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
      {!isOdd && buildImg()}
    </div>
  );
}

export default Attraction;
