import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsOfCategory } from "@/utils/api";

export default function RelatedProducts({category_name}) {

  const [data, setData] = useState(null)


  const fetchCategoryData = async (category_name) =>{
    const response = await fetchProductsOfCategory(category_name)
    setData(response.data.data)
  }
  useEffect(()=>{
    fetchCategoryData(category_name)
  },[])
  console.log(data)
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
  return (
    data&&<div className="mb-10 md:mt-20">
      <h2 className="mb-10 font-bold text-xl md:text-2xl">You Might Also Like</h2>
      <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass="px-[10px]">

        {data.attributes.products.data.map(item=><ProductCard key={item.id} item={item} />)}
        
        </Carousel>
    </div>
  );
}
