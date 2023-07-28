import React from "react";
import Wrapper from "@/components/Universal Components/Wrapper";
import CaroselForProductDetails from "@/components/Product Details/CaroselForProductDetails";
import ProductDetails from "@/components/Product Details/ProductDetails";
import RelatedProducts from "@/components/Product Details/RelatedProducts";

export default function ProductDetailsPage() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[50%] w-full">
            <CaroselForProductDetails/>
          </div>
          <div className="md:w-[40%] w-full">
            <ProductDetails/>
          </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
}
