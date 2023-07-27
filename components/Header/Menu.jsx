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
export default function Menu({ showCatMenu, setShowCatMenu }) {
  return (
    <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                className="cursor-pointer flex items-center gap-2 relative"
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="absolute bg-white top-6 left-0 min-w-[250px] text-black shadow-lg px-1 py-1">
                    {subMenuData.map((subCate) => {
                      return (
                        <Link
                          className="flex justify-between items-center px-2 py-2 hover:bg-black/[0.03] rounded-md"
                          key={subCate.id}
                          href={`/category/${subCate.name}`}
                        >
                          <li>{subCate.name}</li>
                          <span className="opacity-40 text-sm">{`(75)`}</span>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
