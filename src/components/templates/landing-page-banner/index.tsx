import Link from "next/link";
import React from "react";
import backgroundImage from "/page-banner.png";

export default function LandingPageBanner() {
  return (
    <section
      className="landing-page-banner bg-cover bg-center py-[120px]"
      style={{
        backgroundImage: `url(/page-banner.png)`,
      }}
    >
      <div className="container">
        <div className="lpb-content text-center max-w-[650px] mx-auto">
          <h1 className="hidden md:block cursor-pointer mb-2 text-white">
            Online <span className="text-primary">Store</span>
          </h1>
          <p className="capitalize mb-6 text-white">Everything you need delivered right to your door</p>
          <Link href={"/"} className="os-btn-rounded">
            Join Now and Get 30% Off!
          </Link>
          <small className="block text-white">This offer expires soon. Don't miss out!</small>
        </div>
      </div>
    </section>
  );
}
