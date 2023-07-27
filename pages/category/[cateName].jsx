import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import Wrapper from "@/components/Universal Components/Wrapper";
import { useRouter } from "next/router";

export default function CatePage() {
  const router = useRouter();
  const { cateName } = router.query;
  console.log(cateName);
  return (
    <div>
      <Wrapper>
        <div className="py-[2em]">
          <h1 className="text-center text-4xl md:text-5xl font-bold">
            {cateName}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-2 md:gap-4 lg:gap-5 px-2 md:px-4 lg:px-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
}
