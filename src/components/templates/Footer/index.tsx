import Image from "next/image";
import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="footer-logo mb-8">
              <Image src={"/logo.png"} alt="" width={112} height={28} />
            </div>
            <p className="mb-3">House No.49 Kadaghari, Kathmandu. Nepal</p>
            <Link href={"mailto:jhukal9@gmail.com"} className="block mb-2 font-[500]">
              jhukal9@gmail.com
            </Link>
            <Link href={"tel:+977 9812767046"} className="block  font-[500]">
              +977 9812767046
            </Link>
          </div>
          <div className="md:col-span-1 mb-8 lg:mb-0">
            <div className="footer-menu">
              <h4 className="mb-6">Company</h4>
              <ul>
                <li>
                  <Link href={"/"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/"}>Careers</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 mb-8 lg:mb-0">
            <div className="footer-menu">
              <h4 className="mb-6">Shop</h4>
              <ul>
                <li>
                  <Link href={"/men"}>Men</Link>
                </li>
                <li>
                  <Link href={"/women"}>Women</Link>
                </li>
                <li>
                  <Link href={"/"}>Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="footer-menu">
              <h4 className="mb-6">Help</h4>
              <ul>
                <li>
                  <Link href={"/"}>My Account</Link>
                </li>
                <li>
                  <Link href={"/"}>Customer Service</Link>
                </li>
                <li>
                  <Link href={"/"}>Find a Store</Link>
                </li>
                <li>
                  <Link href={"/"}>Legal & Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <div className="footer-menu mb-8">
              <h4 className="mb-6">Subscribe</h4>
              <p className="mb-3">Be the first to get the latest news about trends, promotions, and much more!</p>
              <input type="text" placeholder="Email *" className="w-full border-solid border-[1px] border-gray-300 px-4 py-2 rounded-[6px] mb-3" />
              <button type="submit" className="os-btn-rounded">
                Submit
              </button>
            </div>
            <div className="payment-options">
              <strong className="inline-block mb-4">Secure Payments</strong>
              <Image src={"/payment-options.png"} alt="" width={324} height={38} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
