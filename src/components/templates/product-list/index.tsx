"use client";

import SingleProduct from "@/components/molecules/Product";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProductList() {
  const settings = {
    slidesToShow: 3,
    slideToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          infinite: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.2,
          infinite: false,
        },
      },
    ],
  };
  return (
    <section className="product-list section-gap overflow-hidden">
      <div className="container">
        <div className="section-title flex justify-between items-center">
          <h2>Bags & Accessories</h2>
          <ul className="flex justify-end items-center gap-6">
            <li>
              <Link href={"#"}>Women's </Link>
            </li>
            <li>
              <Link href={"#"}>Men's</Link>
            </li>
          </ul>
        </div>
        <div className="pl-content-box md:grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-start items-start">
          <div className="plc-featured col-span-1  relative mb-8 lg:mb-0">
            <Image src={"/section-featured-01.jpg"} alt="" width={368} height={530} />

            <div className="plcf-content absolute left-[50%] translate-x-[-50%] lg:left-[20px] lg:translate-x-0 bottom-8">
              <span className="text-white uppercase font-[500]">SALE</span>
              <h2 className="text-white">RS. 1599</h2>
              <p className="text-white mb-3">Cross Body Bag</p>
              <Link href={"/"} className="border-[1px] border-white border-solid block py-2 uppercase  text-white text-center">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="plc-featured col-span-1 relative hidden md:block lg:hidden">
            <Image src={"/section-featured-01.jpg"} alt="" width={368} height={530} />

            <div className="plcf-content absolute left-[50%] translate-x-[-50%] lg:left-[20px] lg:translate-x-0 bottom-8">
              <span className="text-white uppercase font-[500]">SALE</span>
              <h2 className="text-white">RS. 1599</h2>
              <p className="text-white mb-3">Cross Body Bag</p>
              <Link href={"/"} className="border-[1px] border-white border-solid block py-2 uppercase  text-white text-center">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="plc-slider-wrapper col-span-2 lg:col-span-3 ">
            <Slider {...settings}>
              <div className="slider-item px-2 cursor-grab">
                <SingleProduct />
              </div>
              <div className="slider-item px-2 cursor-grab">
                <SingleProduct />
              </div>
              <div className="slider-item px-2 cursor-grab">
                <SingleProduct />
              </div>
              <div className="slider-item px-2 cursor-grab">
                <SingleProduct />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
