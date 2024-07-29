import CategoryBanner from "@/components/templates/category-banner";
import RelatedProducts from "@/components/templates/related-products";
import React from "react";

export default function CategoryListLayout({
  children,
  params,
}: {
  children: React.ReactElement;
  params: {
    category: string;
  };
}) {
  return (
    <>
      <CategoryBanner category={params.category} />
      {children}
      <RelatedProducts />
    </>
  );
}
