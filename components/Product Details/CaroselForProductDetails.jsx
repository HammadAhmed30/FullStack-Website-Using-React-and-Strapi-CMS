import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function CaroselForProductDetails() {
  return (
    <div className="w-full max-w-[1280px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={"60px"}
        className="productCarousel"
      >
        <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
        <img src="/p4.png" alt="" />
        <img src="/p5.png" alt="" />
        <img src="/p6.png" alt="" />
        <img src="/p7.png" alt="" />
      </Carousel>
    </div>
  );
}
