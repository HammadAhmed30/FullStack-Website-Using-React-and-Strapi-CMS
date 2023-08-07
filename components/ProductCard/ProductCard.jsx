import { API_URL } from "@/utils/urls";
import Link from "next/link";
import React from "react";

export default function ProductCard({ item }) {
  return (
    <Link
      className="hover:bg-black/[0.02] transition-all"
      href={`/products/${item?.id || "1"}`}
    >
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-[1.01] transition-all"
          src={`${API_URL}${
            item?.attributes?.image?.data[0]?.attributes?.url
          }`}
          alt=""
        />
      </div>
      <div className="p-4 pb-0">
        <p className="text-[16px] font-semibold">
          {item?.attributes.name || "Product Name"}
        </p>
        <div className="flex">
          {item?.attributes.discount > 0 ? (
            <p className="text-[15px] font-semibold text-black/[0.5]">
              $
              {item?.attributes.price -
                (item?.attributes.price * item?.attributes.discount) / 100 ||
                "0.00"}
            </p>
          ) : (
            <p className="text-[15px] font-semibold text-black/[0.5]">
              ${item?.attributes.price || "0.00"}
            </p>
          )}
          {item?.attributes.discount > 0 && (
            // <p className="text-[13px] font-semibold text-black/[0.5] ml-[7px] line-through">{(item?.attributes.price * item?.attributes.discount/100)}</p>
            <p className="text-[13px] font-semibold text-black/[0.5] ml-[7px] line-through">
              {item?.attributes.price}
            </p>
          )}
          {item?.attributes.discount > 0 && (
          <p className="text-[15px] font-semibold text-green-500 ml-auto">
            {item?.attributes.discount}% off
          </p>
          )}
        </div>
      </div>
    </Link>
  );
}
