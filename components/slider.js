import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
  };
  return (
    <Slick {...settings}>
      <Image src="/back.png" alt="" width={200} height={100} />
      <Image src="/back.png" alt="" width={200} height={100} />
      <Image src="/back.png" alt="" width={200} height={100} />
    </Slick>
  );
}

export default Slider;
