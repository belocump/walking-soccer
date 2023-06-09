import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    // Type: string,
    centerPadding: "15px",
    arrows: false,
  };
  return (
    <Slick {...settings}>
      <Image src="/image1.png" alt="" width={1400} height={300} />
      <Image src="/image2.png" alt="" width={1400} height={300} />
      <Image src="/image3.png" alt="" width={1400} height={300} />
      <Image src="/image4.png" alt="" width={1400} height={300} />
    </Slick>
  );
}

export default Slider;
