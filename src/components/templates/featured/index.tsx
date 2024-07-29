import Image from "next/image";
import Link from "next/link";
import "./featured.scss";

import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function FeaturedSection() {
  return (
    <section className="featured section-gap">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-7">
          <div className="col-span-1">
            <div className="featured-item relative">
              <Image src={"/featured-02.jpg"} alt="" width={1380} height={796} />

              <div className="fi-content absolute left-8 bottom-8">
                <strong className={`${jost.className} uppercase text-white text-[16px] block mb-4`}>Starting at Rs. 1200</strong>
                <Link href={"/women"} className="block mb-4 text-white">
                  <h3>Women's T-Shirts</h3>
                </Link>
                <Link href={"/women"} className={`${jost.className} text-white uppercase shop-btn shop-btn-light`}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="featured-item relative">
              <Image src={"/featured-01.jpg"} alt="" width={1380} height={796} />

              <div className="fi-content absolute left-8 bottom-8">
                <strong className={`${jost.className} uppercase  text-[16px] block mb-4`}>Starting at Rs. 1200</strong>
                <Link href={"/women"} className="block mb-4 ">
                  <h3>Men's T-Shirts</h3>
                </Link>
                <Link href={"/women"} className={`${jost.className}  uppercase shop-btn `}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
