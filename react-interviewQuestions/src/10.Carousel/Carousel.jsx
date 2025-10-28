import React from "react";
import CarouselControll from "./CarouselControll";

const Carousel = () => {
  const slides = [
    {
      image: "https://picsum.photos/id/1018/600/300",
      title: "Mountain View",
      description: "Beautiful mountains during sunrise.",
    },
    {
      image: "https://picsum.photos/id/1015/600/300",
      title: "Forest Path",
      description: "A calm walk through the forest.",
    },
    {
      image: "https://picsum.photos/id/1016/600/300",
      title: "Ocean",
      description: "Blue ocean waves hitting the shore.",
    },
  ];

  return <div>
    <h1 style={{ textAlign:'center'}}>React JS Carousal Example</h1>
    <CarouselControll items = {slides} autoPlay = {true} interval = {4000}/>
  </div>;
};

export default Carousel;
