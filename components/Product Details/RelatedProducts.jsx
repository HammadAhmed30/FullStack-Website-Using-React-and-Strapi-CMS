import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import { makingCustomRequests } from "@/utils/api";

export default function RelatedProducts({ category_name, products }) {

  // Making States
  const [prod, setProd] = useState();

  // Function for fetching data
  const fetchRelatedData = async (name) => {
    const products = await makingCustomRequests(
      `/api/products?populate=*&[filters][category][category_name][$eq]=${name}`
    );
    setProd(products.data.data);
  };

  // useEffect to fetch data from strapi
  useEffect(() => {
    fetchRelatedData(category_name);
  }, []);

  // responsive Queries to make the Carousel responsive 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Return function
  return (
    prod&&<div className="mb-10 md:mt-20">
      <h2 className="mb-10 font-bold text-xl md:text-2xl">
        You Might Also Like
      </h2>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {prod?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
