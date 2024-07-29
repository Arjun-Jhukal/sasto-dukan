import SingleProduct from "@/components/molecules/Product";
import Link from "next/link";
import React from "react";

export default function DynamicCategoryPage() {
  return (
    <>
      <section className="section-gap">
        <div className="container">
          <div className="section-title">
            <h2>Featured Product</h2>
            <p>Choice of the 90% Nepalese People in 2024</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
            <div className="col-span-1">
              <SingleProduct />
            </div>
            <div className="col-span-1">
              <SingleProduct />
            </div>
            <div className="col-span-1">
              <SingleProduct />
            </div>
            <div className="col-span-1">
              <SingleProduct />
            </div>
            <div className="col-span-1">
              <SingleProduct />
            </div>
            <div className="col-span-1">
              <SingleProduct />
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="#" className="os-btn-rounded">
              Show More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
