import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/carousel/Home_1.png?raw=true",
  },
  {
    original: "https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/carousel/Home_2.png?raw=true",
  },
  {
    original: "https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/carousel/Home_3.png?raw=true",
  
  },
  {
    original: "https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/carousel/Home_4.png?raw=true",
  
  },
  {
    original: "https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/carousel/Home_5.png?raw=true",
  
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
