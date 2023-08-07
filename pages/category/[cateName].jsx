import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import Wrapper from "@/components/Universal Components/Wrapper";
import { useRouter } from "next/router";
import {
  fetchProductsOfCategory,
  getCategoriesData,
  makingCustomRequests,
} from "@/utils/api";

// getStaticPaths
export const getStaticPaths = async () => {
  const categoryName = await getCategoriesData();
  const paths = categoryName.data.map((item) => {
    return {
      params: {
        cateName: item.attributes.category_name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// getStaticProps
export const getStaticProps = async (context) => {
  const name = context.params.cateName;
  const categories = await makingCustomRequests(
    `/api/categories?filter[category_name][$eq]=${name}`
  );
  const products = await makingCustomRequests(
    `/api/products?populate=*&[filters][category][category_name][$eq]=${name}`
  );
  return {
    props: {
      cateGories: categories.data.data,
      products: products.data.data,
      name,
    },
  };
};

export default function CatePage({ cateGories, products, name }) {
  return (
    <div>
      <Wrapper>
        <div className="py-[2em]">
          <h1 className="text-center text-4xl md:text-5xl font-bold">{name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-2 md:gap-4 lg:gap-5 px-2 md:px-4 lg:px-5">
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
