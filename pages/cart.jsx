import CartItem from "@/components/Cart/CartItem";
import Wrapper from "@/components/Universal Components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  const length = 0;

  return (
    <div className="w-full my-10 md:my-20">
      {length !== 0 ? (
        <Wrapper>
          <h1 className="text-center font-bold text-xl md:text-4xl">
            Shopping Cart
          </h1>
          <div className="flex w-full flex-col md:flex-row gap-10 md:gap-20 mt-16">
            <div className="flex-[2]">
              <h1 className="text-sm md:text-lg font-black">Cart Items</h1>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="flex-[1]">
              <h1 className="text-sm md:text-lg font-black">Summary</h1>
              <div className="w-full bg-green-50 py-5 px-3 rounded-xl mt-5">
                <div className="flex justify-between font-semibold pb-4 border-b">
                  <h1>SUBTOTAL</h1>
                  <p>$14500</p>
                </div>
                <p className="text-sm mt-4 mb-2 font-medium">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts. It does not
                  include delivery costs and international transaction fees
                </p>
              </div>
              <button className="mt-5 w-full bg-black text-white py-4 rounded-full">
                Checkout
              </button>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              className="w-full max-w-[400px]"
              src="/empty-cart.jpg"
              alt=""
            />
            <h2 className="text-lg md:text-2xl font-black text-black mt-2">
              Your Cart is Empty
            </h2>
            <p className="text-sm font-semibold text-black mt-5 text-center">
              Look like you have not added in the your cart
              <br />
              Go ahead and explore top categories
            </p>
            <Link href={"/"} className="w-full text-sm max-w-[240px] text-center bg-black text-white mt-5 py-[15px] md:py-4 rounded-full">
              Continue Shopping
            </Link>
          </div>
        </Wrapper>
      )}
    </div>
  );
}
