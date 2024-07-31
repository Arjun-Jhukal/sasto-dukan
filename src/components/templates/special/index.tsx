import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../featured/featured.scss";

export default function SpecialSection() {
  return (
    <section className="special section-gap bg-white py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="container">
        <div className="special-content-box lg:grid grid-cols-2">
          <div className="sc-item-wrapper mb-8 lg:mb-0 col-span-1">
            <div className="section-title text-center text-lg-start">
              <h2>Refine Your Style</h2>
              <p>Get on our exclusive email list and be the first to hear about sales, coupons, new arrivals and more!</p>
            </div>
            <div className="special-items grid grid-cols-2 gap-4 max-w-[375px] mx-auto">
              <div className="sc-item col-span-1">
                <div className="sci-image mb-6">
                  <Image src={"/special-01-1.jpg"} alt="" width={150} height={227} />
                </div>
                <div className="sci-text ">
                  <Link href={"#"} className="bg-gray-300 inline-block py-1 px-3 rounded-[15px] mb-2 hover:bg-gray-500 text-[12px]">
                    Men's
                  </Link>
                  <h6 className="mb-2">Rib-Knit Cardigan</h6>
                  <h4 className="mb-4 font-[600] ">Rs. 750</h4>
                  <Link href={"#"} className="uppercase shop-btn">
                    Add To Cart
                  </Link>
                </div>
              </div>
              <div className="sc-item col-span-1">
                <div className="sci-image mb-6">
                  <Image src={"/special-01-2.jpg"} alt="" width={150} height={227} />
                </div>
                <div className="sci-text ">
                  <Link href={"#"} className="bg-gray-300 inline-block py-1 px-3 rounded-[15px] mb-2 hover:bg-gray-500 text-[12px] ">
                    Men's
                  </Link>
                  <h6 className="mb-2">Rib-Knit Cardigan</h6>
                  <div className="flex justify-start space-x-2 items-center mb-4">
                    <h4 className=" font-[600] ">Rs. 750</h4>
                    <del className="text-primary">Rs. 1250</del>
                  </div>
                  <Link href={"#"} className="uppercase shop-btn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-whole col-span-1 relative">
            <Link href={"#"}>
              <Image src={"/special-01.jpg"} alt="" width={575} height={630} />
            </Link>
            <div className="scw-content absolute left-12 bottom-12 md:bottom-[8rem] max-w-[450px]">
              <div>
                <h3 className=" mb-4">Casual Basics and trendy key pieces</h3>
                <span className=" mb-3 inline-block">Includes</span>
                <ul className="pl-6 mb-4">
                  <li className=" list-disc mb-2">Rib-knit cardigan </li>
                  <li className=" list-disc">Linen-blend paper bag trousers </li>
                </ul>
                <h3 className=" block mb-4 ">RS. 2400</h3>
                <Link href={"#"} className="shop-btn uppercase  ">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
