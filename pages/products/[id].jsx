import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Universal Components/Wrapper";
import CaroselForProductDetails from "@/components/Product Details/CaroselForProductDetails";
import ProductDetails from "@/components/Product Details/ProductDetails";
import RelatedProducts from "@/components/Product Details/RelatedProducts";
import { useRouter } from "next/router";
import { fetchParticularProductUsingId } from "@/utils/api";

export default function ProductDetailsPage() {

  const [product, setProduct] = useState()
  const router = useRouter();
  const { id } = router.query;

  const fetchProductUsingId = async (id) =>{
    const product = await fetchParticularProductUsingId(id)
    setProduct(product.data.data)
  }

  useEffect(()=>{
    if(id){
      fetchProductUsingId(id)
    }
  },[id])

  // console.log(product)

  return (
    product&&<div className="w-full md:py-20">

      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[50%] w-full">
            <CaroselForProductDetails product={product?.attributes} />
          </div>
          <div className="md:w-[40%] w-full">
            <ProductDetails product={product?.attributes}  />
          </div>
        </div>
        {/* <RelatedProducts category_name={product?.attributes.category.data.id}  /> */}
      </Wrapper>
    </div>
  );
}
