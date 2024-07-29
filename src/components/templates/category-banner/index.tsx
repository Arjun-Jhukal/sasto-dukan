import Link from "next/link";
import "./category-banner.scss";

export default function CategoryBanner({ category }: { category: string }) {
  return (
    <section className="category-banner section-gap bg-primary py-12">
      <div className="container">
        <div className="cb-content">
          {/* react/no-unescaped-entities */}
          <h1 className="mb-6 text-white capitalize">{category}'s Category</h1>

          <ul className="flex justify-start items-center gap-4">
            <li className="active">
              <Link
                href="/men/top"
                className="border-solid border-[1px] border-white hover:bg-white text-white hover:text-primary px-4 py-1 rounded-[12px]"
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                href="/men/bottom"
                className="border-solid border-[1px] border-white hover:bg-white text-white hover:text-primary px-4 py-1 rounded-[12px]"
              >
                Bottom
              </Link>
            </li>
            <li>
              <Link
                href="/men/outerwear"
                className="border-solid border-[1px] border-white hover:bg-white text-white hover:text-primary px-4 py-1 rounded-[12px]"
              >
                Outerwear
              </Link>
            </li>
            <li>
              <Link
                href="/men/footwear"
                className="border-solid border-[1px] border-white hover:bg-white text-white hover:text-primary px-4 py-1 rounded-[12px]"
              >
                Footwear
              </Link>
            </li>
            <li>
              <Link
                href="/men/accessories"
                className="border-solid border-[1px] border-white hover:bg-white text-white hover:text-primary px-4 py-1 rounded-[12px]"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
