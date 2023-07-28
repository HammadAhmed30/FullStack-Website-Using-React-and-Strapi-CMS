import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductDetails() {
  return (
    <div className="w-full flex flex-col mt-10 md:mt-5">
      <h1 className="font-bold text-2xl md:text-4xl">Jordan Retro 6 G</h1>
      <h3 className="font-bold text-lg md:text-xl">Men's Golf Shoes</h3>
      <p className="mt-7 font-bold text-lg md:text-xl">MRP : $ 130</p>
      <p className="text-[14px] md:text-[16px] text-black/[0.34] font-semibold tracking-normal">
        incl. of taxes
      </p>
      <p className="text-[14px] md:text-[16px] text-black/[0.34] font-semibold leading-tight tracking-normal">
        {"("}Also includes all aplicable duties{")"}
      </p>
      <div className="mt-[65px]">
        <div className="w-full flex justify-between">
          <p className="font-bold cursor-pointer">Select Size</p>
          <p className="font-bold text-black/[0.34] cursor-pointer">
            Select Guide
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 9
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 9.5
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 8
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 8.5
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 10
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 10.5
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-pointer text-center py-[15px] md:py-[10px] rounded-md">
            UK 11
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-not-allowed bg-black/[0.1] opacity-50 text-center py-[15px] md:py-[10px] rounded-md">
            UK 12
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-not-allowed bg-black/[0.1] opacity-50 text-center py-[15px] md:py-[10px] rounded-md">
            UK 12.5
          </div>
          <div className="text-[13px] border font-semibold hover:border-black transition-all cursor-not-allowed bg-black/[0.1] opacity-50 text-center py-[15px] md:py-[10px] rounded-md">
            UK 13
          </div>
        </div>
        <p className="text-sm text-red-700 font-semibold mt-2 mb-10">
          Size selection is required
        </p>
        <button className="w-full bg-black text-white py-3 md:py-4 rounded-full">
          Add to Cart
        </button>
        <button className="w-full bg-white text-black border-2 border-black flex justify-center items-center py-[8px] md:py-[12px] rounded-full mt-2 text-lg font-semibold">
          Wishlist
          <IoMdHeartEmpty className="text-xl ml-2" />
        </button>
        <h2 className="text-lg md:text-xl font-black mt-8">Product Details</h2>
        <p className="my-6 text-[16px] mb-10 md:mb-0 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam
          iure cum odit qui exercitationem corporis error! Esse quaerat autem
          dolores voluptatem possimus beatae. Eligendi similique eum facilis,
          molestiae sed quaerat quas ea impedit nobis earum nesciunt? Soluta
          modi placeat error iusto id dolores quia, cupiditate eum illum
          perferendis vel ipsum! Mollitia ea odit nam quae quisquam eligendi.
          Error eveniet inventore, perspiciatis aliquid esse veniam incidunt
          iure aut doloribus porro dolorem dolores qui reprehenderit odio ut
          natus deserunt non cupiditate. Quisquam, maxime, unde quia aliquam
          quaerat, recusandae perferendis dicta assumenda eius odio harum eum
          amet reprehenderit velit culpa maiores dolorum.
        </p>
      </div>
    </div>
  );
}
