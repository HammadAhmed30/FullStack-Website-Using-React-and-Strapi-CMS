import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {BiArrowBack } from "react-icons/bi";
export default function HeroBanner() {
  return (
    <div className="w-full max-w-[1280px] mx-auto text-white relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler,hasPrev)=>(
            <div onClick={clickHandler} className="absolute cursor-pointer bottom-0 right-[41px] md:right-[51px] bg-black text-white h-[40px] md:h-[50px] w-[40px] z-10 md:w-[50px] flex items-center justify-center">
                <BiArrowBack className="text-white" />
            </div>
        )}
        renderArrowNext={(clickHandler,hasNext)=>(
            <div onClick={clickHandler} className="absolute cursor-pointer bottom-0 right-0 md:right-0 bg-black text-white h-[40px] md:h-[50px] w-[40px] z-10 md:w-[50px] flex items-center justify-center">
                <BiArrowBack className="text-white rotate-180" />
            </div>
        )}
      >
        <div className="w-full min-h-[220px] relative">
          <img src="slide-1.png" className="w-full h-full min-h-[220px] object-cover" />
          <button className="absolute left-0 bottom-[10px] md:font-medium md:bottom-[30px] cursor-pointer px-3 md:px-8 py-2 md:py-3 font-oswald text-sm md:text-2xl bg-white text-black">
            Shop Now
          </button>
        </div>

        <div className="w-full min-h-[220px]  relative">
          <img src="slide-2.png" className="w-full h-full min-h-[220px] object-cover" />
          <button className="absolute left-0 bottom-[10px] md:font-medium md:bottom-[30px] cursor-pointer px-3 md:px-8 py-2 md:py-3 font-oswald text-sm md:text-2xl bg-white text-black">
            Shop Now
          </button>
        </div>

        <div className="w-full min-h-[220px]  relative">
          <img src="slide-3.png" className="w-full h-full min-h-[220px] object-cover" />
          <button className="absolute left-0 bottom-[10px] md:font-medium md:bottom-[30px] cursor-pointer px-3 md:px-8 py-2 md:py-4 font-oswald text-sm md:text-2xl bg-white text-black">
            Shop Now
          </button>
        </div>
      </Carousel>
    </div>
  );
}
