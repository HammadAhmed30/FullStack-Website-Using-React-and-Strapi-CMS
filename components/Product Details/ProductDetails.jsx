import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { addToCart } from "@/Redux Store/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails({ product, item, notify }) {
  const dispatch = useDispatch();
  const handleAddToCart = (i) => {
    dispatch(addToCart(i));
  };

  return (
    <div className="w-full flex flex-col mt-10 md:mt-5">
      <h1 className="font-bold text-2xl md:text-4xl">{product.name}</h1>
      <h3 className="font-bold text-lg md:text-xl">Men's Golf Shoes</h3>
      {product?.discount > 0 ? (
        <p className="mt-7 font-bold text-lg md:text-xl">
          MRP : $
          {product?.price - (product?.price * product?.discount) / 100 ||
            "0.00"}
        </p>
      ) : (
        <p className="mt-7 font-bold text-lg md:text-xl">
          MRP : $ {product.price}
        </p>
      )}
      <div className="flex justify-between my-5">
        {product?.discount > 0 && (
          <p className="text-sm md:text-[17px] font-semibold text-black/[0.5] line-through">
            $ {product?.price}
          </p>
        )}
        {product?.discount > 0 && (
          <p className="text-sm md:text-[17px] font-semibold text-green-500 ml-auto">
            {product?.discount}% off
          </p>
        )}
      </div>
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
        <button
          className="w-full bg-black text-white py-3 md:py-4 rounded-full"
          onClick={() => {
            handleAddToCart({
              ...item,
              originalPrice:
                product.discount > 0
                  ? product?.price - (product?.price * product?.discount) / 100
                  : product.price,
              price:
                product.discount > 0
                  ? product?.price - (product?.price * product?.discount) / 100
                  : product.price,
            });
            notify();
          }}
        >
          Add to Cart
        </button>
        <button className="w-full bg-white text-black border-2 border-black flex justify-center items-center py-[8px] md:py-[12px] rounded-full mt-2 text-lg font-semibold">
          Wishlist
          <IoMdHeartEmpty className="text-xl ml-2" />
        </button>
        <h2 className="text-lg md:text-xl font-black mt-8">Product Details</h2>
        <p className="my-6 text-[16px] mb-10 md:mb-0 font-medium">
          {product.description}
        </p>
      </div>
    </div>
  );
}
