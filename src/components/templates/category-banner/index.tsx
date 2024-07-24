import Link from "next/link";

export default function CategoryBanner() {
  return (
    <section className="category-banner section-gap bg-orange-200 py-12">
      <div className="container">
        <div className="cb-content">
          <h1 className="mb-6">Men's Store</h1>

          <ul className="flex justify-start items-center gap-4">
            <li>
              <Link href="" className="border-solid border-[1px] border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1 rounded-[12px]">
                Top
              </Link>
            </li>
            <li>
              <Link href="" className="border-solid border-[1px] border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1 rounded-[12px]">
                Bottom
              </Link>
            </li>
            <li>
              <Link href="" className="border-solid border-[1px] border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1 rounded-[12px]">
                Outerwear
              </Link>
            </li>
            <li>
              <Link href="" className="border-solid border-[1px] border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1 rounded-[12px]">
                Footwear
              </Link>
            </li>
            <li>
              <Link href="" className="border-solid border-[1px] border-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1 rounded-[12px]">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
