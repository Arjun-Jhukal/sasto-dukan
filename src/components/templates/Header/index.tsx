"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const authUser = true;

  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <>
      <header className="header py-4 md:py-2 bg-white">
        <div className="container">
          <div className="header-content flex justify-between items-center">
            <div className="header-logo flex justify-start gap-4">
              <button
                type="button"
                className="ham-icon lg:hidden"
                onClick={() => {
                  setShowMobileMenu(true);
                }}
              >
                <Image src={"/ham.svg"} alt="Hamburger Menu Icon" width={30} height={30} />
              </button>
              <h1 className="hidden md:block cursor-pointer">
                Online <span className="text-primary">Store</span>
              </h1>
            </div>
            <ul
              className={`primary-menu fixed top-0 left-0 bottom-0 z-[1] bg-gray-950 min-w-[320px] lg:static lg:bg-transparent lg:flex gap-6 px-4 lg:px-0 ${
                showMobileMenu ? "active" : ""
              }`}
            >
              <li className="flex justify-between items-center lg:hidden pt-8 pb-6 px-4">
                <Link href={"/"}>
                  <h2 className=" text-white">
                    Online <span className="text-primary">Store</span>
                  </h2>
                </Link>
                <button
                  type="button"
                  className="close-ham"
                  onClick={() => {
                    setShowMobileMenu(false);
                  }}
                >
                  <Image src={"/close-icon.svg"} alt="Hamburger Menu Icon" width={20} height={20} />
                </button>
              </li>
              <li className={pathname === "/" ? "active" : ""}>
                <Link
                  href={"/"}
                  className="block px-4 py-2 lg:px-0 lg:py-0 rounded-md text-white hover:bg-primary hover:text-white lg:text-gray-950 hover:bg-transparent lg:hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li className={pathname === "/men" ? "active" : ""}>
                <Link
                  href={"/men"}
                  className="block px-4 py-2 lg:px-0 lg:py-0 rounded-md text-white hover:bg-primary hover:text-white lg:text-gray-950 hover:bg-transparent lg:hover:text-primary"
                >
                  Men
                </Link>
              </li>
              <li className={pathname === "/women" ? "active" : ""}>
                <Link
                  href={"/women"}
                  className="block px-4 py-2 lg:px-0 lg:py-0 rounded-md text-white hover:bg-primary hover:text-white lg:text-gray-950 hover:bg-transparent lg:hover:text-primary"
                >
                  Women
                </Link>
              </li>
              <li className={pathname === "/sale" ? "active" : ""}>
                <Link
                  href={"/sale"}
                  className="block px-4 py-2 lg:px-0 lg:py-0 rounded-md text-white hover:bg-primary hover:text-white lg:text-gray-950 hover:bg-transparent lg:hover:text-primary"
                >
                  Sale
                </Link>
              </li>
            </ul>
            <div className="header-btn-group flex justify-end items-center gap-2">
              <Link href={"#"}>
                {authUser ? (
                  <Image src={"/reviewer-01.png"} alt="User Profile | Sasto Dukan" width={30} height={30} />
                ) : (
                  <Image src={"/03.svg"} alt="User Profile | Sasto Dukan" width={30} height={30} />
                )}
              </Link>
              <Link href={"#"} className="relative">
                <Image src={"/02.svg"} alt="Users Cart | Sasto Dukan" width={30} height={30} />
                <sup className="absolute right-0 top-0 bg-primary inline-block w-[15px] h-[15px] rounded-[50%] text-[10px] flex justify-center items-center text-white">
                  2
                </sup>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Link
        href={""}
        className={`fixed inset-0 bg-[rgba(0,0,0,0.5)]  overlay ${showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setShowMobileMenu(false)}
      ></Link>
    </>
  );
}
