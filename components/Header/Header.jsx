import { useEffect, useState } from "react";
import Wrapper from "../Universal Components/Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";
import { getCategoriesData } from "@/utils/api";
import { useSelector } from "react-redux";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.length;

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const fetchCategoriesData = async () => {
    const cateData = await getCategoriesData();
    setCategories(cateData.data);
  };
  useEffect(() => {
    fetchCategoriesData();
  }, []);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`flex justify-between items-center`}>
        <Link href={"/"}>
          <img
            className={`w-[40px] md:w-[80px]`}
            src="/logo.svg"
            alt="EtralShoes | Get your desired jordans and any kind of shoes"
          />
        </Link>

        <Menu
          categories={categories}
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        />

        {mobileMenu && (
          <MobileMenu
            categories={categories}
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex gap-1 font-medium">
          {/* Liked Items start */}
          <div className="relative hover:bg-black/[0.05] h-8 w-8 md:w-12 md:h-12 flex items-center justify-center rounded-full cursor-pointer">
            <IoMdHeartEmpty className="text-[16px] md:text-[20px]" />
            <span className="text-[8px] md:text-[10px] px-[4px] py-[4px] leading-tight text-white bg-red-600 rounded-full flex items-center justify-between absolute top-0 left-4 md:left-6">
              32
            </span>
          </div>

          {/* Liked Items End */}
          {/* Cart Icon start */}

          <Link
            href={"/cart"}
            className="relative hover:bg-black/[0.05] h-8 w-8 md:w-12 md:h-12 flex items-center justify-center rounded-full cursor-pointer"
          >
            <BsCart className="text-[16px] md:text-[20px]" />
            {cartLength > 0 && (
              <span className="text-[8px] md:text-[10px] px-[4px] py-[4px] min-w-[20px] text-center leading-tight text-white bg-red-600 rounded-full absolute top-0 left-4 md:left-6">
                {cartLength}
              </span>
            )}
          </Link>

          {/* Cart Icon End */}
          {/* Menu Open/Close Button start and End */}

          {mobileMenu ? (
            <div
              onClick={() => setMobileMenu(false)}
              className="md:hidden ml-2 md:ml-0 relative hover:bg-black/[0.05] h-8 w-8 md:w-12 md:h-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <VscChromeClose className="text-[16px] md:text-[20px]" />
            </div>
          ) : (
            <div
              onClick={() => setMobileMenu(true)}
              className="md:hidden ml-2 md:ml-0 relative hover:bg-black/[0.05] h-8 w-8 md:w-12 md:h-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <BiMenuAltRight className="text-[16px] md:text-[20px]" />
            </div>
          )}
        </div>
      </Wrapper>
    </header>
  );
}
