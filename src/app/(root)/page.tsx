import SingleProduct from "@/components/molecules/Product";
import CategoryBanner from "@/components/templates/category-banner";
import FeaturedSection from "@/components/templates/featured";
import LandingPageBanner from "@/components/templates/landing-page-banner";
import ProductList from "@/components/templates/product-list";
import SpecialSection from "@/components/templates/special";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <LandingPageBanner />
      <FeaturedSection />
      <ProductList />
      <SpecialSection />
      <ProductList />
    </>
  );
}
