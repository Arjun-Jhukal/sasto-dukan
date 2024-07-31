"use client";

import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./page-banner.scss";

export default function LandingPageBanner() {
  const settings = {
    slidesToShow: 1,
    slideToScroll: 1,
    dots: true,
    arrows: false,
  };
  return (
    <>
      <section className="section-gap page-banner overflow-hidden">
        <div className="sales-banner bg-black py-2 text-center ">
          <p className="text-white">
            {" "}
            <Link href={"/"}>Click</Link> Join Now and Get 30% Off!
          </p>
        </div>

        <Slider {...settings}>
          <div className="slider-item">
            <div className="container">
              <div className="grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 md:order-2 mb-4 md:mb-0 h-full">
                  <Image src={"/page-banner.png"} alt="" width={742} height={1035} />
                </div>

                <div className="col-span-2 md:col-span-1 md:order-1">
                  <strong className="inline-block mb-2">Shopping Center</strong>
                  <h1 className=" cursor-pointer mb-2">
                    Online <span className="text-primary">Store</span>
                  </h1>
                  <p className="mb-8">Casual line. Short design. 100% suede leather. </p>
                  <Link href={"/men"} className="border-[1px] border-black border-solid  py-2  px-4 uppercase  text-black text-center">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="container">
              <div className="grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 md:order-2 mb-4 md:mb-0 h-full">
                  <Image src={"/page-banner-02.jpg"} alt="" width={742} height={1035} />
                </div>

                <div className="col-span-2 md:col-span-1 md:order-1">
                  <strong className="inline-block mb-2">Winter Collection 2024</strong>
                  <h1 className="mb-2">Winter Vibes</h1>
                  <p className="mb-8">Casual line. Short design. 100% suede leather. </p>
                  <Link href={"/men"} className="border-[1px] border-black border-solid  py-2  px-4 uppercase  text-black text-center">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
