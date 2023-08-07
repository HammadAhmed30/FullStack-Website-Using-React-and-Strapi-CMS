import React from "react";
import Wrapper from "@/components/Universal Components/Wrapper";
import CaroselForProductDetails from "@/components/Product Details/CaroselForProductDetails";
import ProductDetails from "@/components/Product Details/ProductDetails";
import RelatedProducts from "@/components/Product Details/RelatedProducts";
import { fetchAllProducts, fetchParticularProductUsingId } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getStaticPaths = async () => {
  const product = await fetchAllProducts();

  const paths = product.data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetchParticularProductUsingId(id);
  return {
    props: {
      product: res.data.data,
    },
  };
};

export default function ProductDetailsPage({ product }) {
  const notify = () => {
    toast.success("Successfully added to cart.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    product && (
      <div className="w-full md:py-20">
        <ToastContainer />
        <Wrapper>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[50%] w-full">
              <CaroselForProductDetails product={product?.attributes} />
            </div>
            <div className="md:w-[40%] w-full">
              <ProductDetails
                product={product?.attributes}
                item={product}
                notify={notify}
              />
            </div>
          </div>
          <RelatedProducts
            category_name={
              product?.attributes.category.data.attributes.category_name
            }
          />
        </Wrapper>
      </div>
    )
  );
}
