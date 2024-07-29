import Image from "next/image";
import "./cart.scss";

export default function CartPage() {
  return (
    <section className="cart pt-[80px] section-gap">
      <div className="container">
        <div className="section-title mb-8">
          <h2>Shopping Bag</h2>
          <p>
            <strong className="text-black">2 Items</strong>
            &nbsp;in your bag
          </p>
        </div>
        <div className="cart-content-box lg:grid grid-cols-12 gap-8">
          <div className="col-span-8 mb-8 lg:mb-0">
            <div className="bg-white rounded-[12px] p-8">
              <table className="table w-full">
                <thead className="thead">
                  <tr className="flex justify-between items-center  mb-4">
                    <th className="flex-[2] text-left">Product</th>
                    <th className="flex-1 text-left">Price</th>
                    <th className="flex-1 text-left">Quantity</th>
                    <th className="flex-1 text-left">Total Price</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  <tr className="flex justify-between items-center">
                    <td className="flex-[2]">
                      <div className="product-description flex justify-start items-center gap-3">
                        <div className="pd-image rounded-[12px] overflow-hidden min-w-[80px]">
                          <Image src={"/product-02.png"} alt="Product 02" width={80} height={100} />
                        </div>
                        <div className="pd-brief">
                          <span className="text-gray-500">Men</span>
                          <h5>Face Wash</h5>
                          <ul>
                            <li className="text-gray-500">
                              Size <strong className="text-black">XXL</strong>
                            </li>
                            <li className="text-gray-500">
                              Color <strong className="text-black">Blue</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td className="flex-1">
                      <strong>NPR. 450</strong>
                    </td>
                    <td className="flex-1">
                      <div className="flex justify-start items-center gap-2">
                        <button className="p-1 border-[1px] border-gray-300 border-solid rounded-[4px] leading-[8px]">+</button>
                        <span>2</span>
                        <button className="p-1 border-[1px] border-gray-300 border-solid rounded-[4px] leading-[8px]">-</button>
                      </div>
                    </td>
                    <td className="flex-1">
                      <strong>NPR. 900</strong>
                    </td>
                  </tr>
                  <tr className="flex justify-between items-center">
                    <td className="flex-[2]">
                      <div className="product-description flex justify-start items-center gap-3">
                        <div className="pd-image rounded-[12px] overflow-hidden min-w-[80px]">
                          <Image src={"/product-02.png"} alt="Product 02" width={80} height={100} />
                        </div>
                        <div className="pd-brief">
                          <span className="text-gray-500">Men</span>
                          <h5>Face Wash</h5>
                          <ul>
                            <li className="text-gray-500">
                              Size <strong className="text-black">XXL</strong>
                            </li>
                            <li className="text-gray-500">
                              Color <strong className="text-black">Blue</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td className="flex-1">
                      <strong>NPR. 450</strong>
                    </td>
                    <td className="flex-1">
                      <div className="flex justify-start items-center gap-2">
                        <button className="p-1 border-[1px] border-gray-300 border-solid rounded-[4px] leading-[8px]">+</button>
                        <span>2</span>
                        <button className="p-1 border-[1px] border-gray-300 border-solid rounded-[4px] leading-[8px]">-</button>
                      </div>
                    </td>
                    <td className="flex-1">
                      <strong>NPR. 900</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <aside className="col-span-4">
            <div className="bg-white px-4 py-6 rounded-[12px] ">
              <div className="coupon-code-box mb-6">
                <h5 className="mb-4">Coupon Code</h5>
                <p className="mb-2">Apply your discount code below and save on your purchase!</p>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="py-2 px-4 mb-4 border-gray-300 border-[1px] border-solid block rounded-[12px] w-full outline-none"
                />
                <button type="submit" className="os-btn-rounded block w-full">
                  Apply
                </button>
              </div>
              <div className="cart-total rounded-[12px] p-4">
                <h5 className="mb-4">Cart Total</h5>
                <ul className="mb-6">
                  <li className="flex justify-between">
                    Cart Subtotal <strong>NPR. 1800</strong>
                  </li>
                  <li className=" discount flex justify-between">
                    Coupon Discount <strong>NPR. 100</strong>
                  </li>
                  <li className=" discount flex justify-between">
                    Discount <strong>NPR. 500</strong>
                  </li>
                  <li className="tax flex justify-between">
                    VAT <strong>NPR. 200</strong>
                  </li>
                  <li className="flex justify-between">
                    Cart Total <strong>NPR.1400</strong>
                  </li>
                </ul>
                <button type="submit" className=" bg-white text-primary w-full py-2 rounded-[25px]">
                  Checkout
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
