import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleProduct() {
  return (
    <div className="product bg-white shadow-sm py-6 px-3 lg:p-8 relative rounded-[12px] overflow-hidden">
      <div className="product-image aspect-4/3 relative mb-6">
        <Image src={"/product-01.jpg"} alt="Product Image" layout="fill" objectFit="contain" />
      </div>
      <div className="product-detail text-center">
        {/* react/no-unescaped-entities */}
        <Link href={"#"} className="bg-gray-300 inline-block py-1 px-3 rounded-[15px] mb-2 hover:bg-gray-500 hover:text-white text-[12px]">
          Men's
        </Link>
        <Link href={"#"} className="block mb-4">
          <h4>Cotton Jacket</h4>
        </Link>
        <div className="price-info flex justify-center items-center gap-1 mb-6">
          <h3>Rs. 450</h3>
          <del className="text-primary">Rs. 850</del>
        </div>

        <div className="product-btn-group">
          <Link className="os-btn-filled mb-2 flex items-center justify-center gap-2" href={"#"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} height={20} fill="#fff">
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <span> Add to Cart</span>
          </Link>
          <Link className="os-btn-text flex justify-center items-center gap-2 hover:*:path" href={"#"}>
            View Details
            <svg width="20" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5575 0.741333L12.6737 1.6252L16.4236 5.37508H0.125V6.62512H16.4234L12.6737 10.3749L13.5575 11.2588L18.8163 6.00004L13.5575 0.741333Z"
                fill="#1a1a1a"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="discount inline-block absolute top-0 right-0 bg-black py-1 px-2">
        <p className="text-white">Flat 10% Off</p>
      </div>
    </div>
  );
}
