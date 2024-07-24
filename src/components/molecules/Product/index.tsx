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
        <span className="text-primary">Men's Clothing</span>
        <Link href={"#"} className="block mb-4">
          <h4>Cotton Jacket</h4>
        </Link>
        <div className="price-info flex justify-center items-center gap-1 mb-6">
          <h3>Rs. 450</h3>
          <del>Rs. 850</del>
        </div>

        <div className="product-btn-group">
          <Link className="os-btn-filled mb-2" href={"#"}>
            Add to Cart
          </Link>
          <Link className="os-btn-text" href={"#"}>
            View Details
          </Link>
        </div>
      </div>
      <div className="discount inline-block absolute top-0 right-0 bg-primary py-1 px-2">
        <p className="text-white">Flat 10% Off</p>
      </div>
    </div>
  );
}
