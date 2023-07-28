import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem() {
  return (
    <div className="w-full flex justify-between py-[20px] border-b">
      {/* LEFT SIDE OF CARD */}

      <div className="flex">
        <div className="h-[70px] md:h-[100px] w-[70px] md:w-[100px] overflow-hidden rounded-lg">
          <img className="h-full w-full object-cover" src="/p1.png" alt="" />
        </div>
        <div className="ml-2 md:ml-5">
          <h2 className="text-sm md:text-lg font-bold tracking-normal">
            Jordan Retro 6 G
          </h2>
          <p className="text-xs md:text-sm font-bold text-black/[0.34]">
            Men's Golf Shoes
          </p>
          <div className="flex gap-0 md:gap-5 flex-col md:flex-row">
            <div className="flex gap-2 text-xs md:text-sm mt-0 md:mt-3">
              <p className="font-bold text-black/[0.44]">Size</p>
              <select
                className="outline-none text-xs font-bold text-black/[0.3]"
                name=""
                id=""
              >
                <option value="" className="text-black">
                  UK 6
                </option>
                <option value="" className="text-black">
                  UK 7
                </option>
                <option value="" className="text-black">
                  UK 8
                </option>
                <option value="" className="text-black">
                  UK 4
                </option>
                <option value="" className="text-black">
                  UK 5
                </option>
                <option value="" className="text-black">
                  UK 3
                </option>
                <option value="" className="text-black">
                  UK 2
                </option>
                <option value="" className="text-black">
                  UK 1.5
                </option>
              </select>
            </div>
            <div className="flex gap-2 text-xs md:text-sm mt-0 md:mt-3">
              <p className="font-bold text-black/[0.44]">Quantity</p>
              <select
                className="outline-none text-xs font-bold text-black/[0.3]"
                name=""
                id=""
              >
                <option value="" className="text-black">
                  1
                </option>
                <option value="" className="text-black">
                  2
                </option>
                <option value="" className="text-black">
                  3
                </option>
                <option value="" className="text-black">
                  4
                </option>
                <option value="" className="text-black">
                  5
                </option>
                <option value="" className="text-black">
                  6
                </option>
                <option value="" className="text-black">
                  7
                </option>
                <option value="" className="text-black">
                  8
                </option>
                <option value="" className="text-black">
                  9
                </option>
                <option value="" className="text-black">
                  10
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE OF CARD */}
      <div className="flex flex-col justify-between h-full text-right items-end">
        <p className="text-xs font-bold text-black/[0.5]">MRP : $100</p>
        <RiDeleteBin6Line className="text-right mt-4 md:mt-8 opacity-50 hover:opacity-100 cursor-pointer transition-all"/>
      </div>
    </div>
  );
}
