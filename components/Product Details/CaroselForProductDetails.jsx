import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { API_URL } from "@/utils/urls";
export default function CaroselForProductDetails({ product }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={"60px"}
        className="productCarousel"
      >
        {product.image.data.map((item) => (
          <img key={item.id} src={`${API_URL}${item?.attributes.url}`} alt="" />
        ))}
      </Carousel>
    </div>
  );
}
