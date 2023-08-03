import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
export default function MobileMenu({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories
}) {
  return (
    <ul
      className={`flex md:hidden flex-col w-full absolute top-[50px] h-[calc(100vh-50px)] left-0 bg-white`}
    >
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li>
                <div
                  onClick={() => setShowCatMenu(!showCatMenu)}
                  className="cursor-pointer px-3 py-3 flex justify-between items-center border-b font-bold"
                >
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="relative">
                    {categories.map((subCate) => {
                      return (
                        <Link
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                          className="flex justify-between items-center px-5 py-3 bg-black/[0.03] border-b rounded-md"
                          key={subCate.id}
                          href={`/category/${subCate?.attributes.category_name}`}
                        >
                          <li>{subCate?.attributes.category_name}</li>
                          <span className="opacity-40 text-sm">{`(${subCate?.attributes.products.data.length})`}</span>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer px-3 py-3 border-b font-bold">
                <Link
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
