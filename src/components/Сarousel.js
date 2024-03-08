import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "../images/carousel/Home_1.png",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  
  },
];

function Сarousel() {
  return <ImageGallery
    items={images}
    showFullscreenButton={false}
    showThumbnails={false}
    showPlayButton={false}
    autoPlay={true}
    slideDuration={700}
    slideInterval={4000}
    lazyLoad={true}
    useTranslate3D={false}
  />;
}

export default Сarousel;
