import SingleProduct from "@/components/molecules/Product";
import CategoryBanner from "@/components/templates/category-banner";
import LandingPageBanner from "@/components/templates/landing-page-banner";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <LandingPageBanner />
      <SingleProduct />
    </>
  );
}
