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
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    arrows: false,
  };
  return (
    <Slick {...settings}>
      <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      <Image src="/back.png" alt="" width={1400} height={300} />
      <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      {/* <div className="flex">
        <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      </div>
      <div className="flex">
        <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      </div>
      <div className="flex">
        <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      </div>
      <div className="flex">
        <Image src="/walking-soccer.png" alt="" width={1400} height={300} />
      </div> */}
    </Slick>
  );
}

export default Slider;
