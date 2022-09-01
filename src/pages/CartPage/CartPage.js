import Layout from "../../Layout/Layout";
import { useCart, useCartActions } from "../../Providers/CartProvider";
import { BiTrash } from "react-icons/bi";
import "./CartPage.css";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD-TO-CART", payload: cartItem });
  };
  const decrementHandler = (cartItem) => {
    dispatch({ type: "Decrement_Product", payload: cartItem });
  };

  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  if (!cart.length)
    return (
      <Layout>
        <main className="container mx-auto m-16 h-96 text-center p-20 ">
          <section>
            <p className="text-xl text-bold text-gray-400">cart is empty</p>
          </section>
        </main>
      </Layout>
    );
  return (
    <Layout>
      <main className="container mx-auto mt-20 ">
        <section className="flex items-start lg:flex-row flex-col justify-end p-6">
          <div className="lg:w-2/3  w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4  bg-white">
            {cart.map((item) => {
              return (
                <div
                  className="md:flex items-strech py-8 md:py-10 lg:py-8 border-b border-amber-200 "
                  key={item.id}
                >
                  <div className="w-full md:w-4/12 2xl:w-1/4   flex items-center justify-center">
                    <img
                      src={`${item.image}`}
                      alt={`${item.name}`}
                      className="h-60 w-48 object-center object-fit"
                    />
                  </div>

                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-cente ">
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800 ">
                        {item.name}
                      </p>

                      <div className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none text-bold text-xl ">
                        <button
                          className="py-2 px-1 text-red-500"
                          onClick={() => decrementHandler(item)}
                        >
                          {item.quantity > 1 ? "-" : <BiTrash color="red" />}
                        </button>
                        <button className="py-2 px-1">{item.quantity}</button>
                        <button
                          className="py-2 px-1"
                          onClick={() => incrementHandler(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-base leading-3 text-gray-600  pt-2">
                      price: ${item.price}
                    </p>
                    <p className="text-base leading-3 text-gray-600  py-4">
                      off: ${(item.price - item.offPrice) * item.quantity}
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex itemms-center"></div>
                      <p className="text-base font-black leading-none text-gray-800 ">
                        ${item.offPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:w-1/3  w-full bg-amber-100 ">
            <div className="flex flex-col lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p className="lg:text-3xl text-2xl font-black leading-9 text-amber-800 ">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800 ">
                    original total price
                  </p>
                  <p className="text-base leading-none text-gray-800 ">
                    ${originalTotalPrice}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800 ">
                    cart discount
                  </p>
                  <p className="text-base leading-none text-gray-800 ">
                    ${originalTotalPrice - total}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-gray-800 ">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
                    ${total}
                  </p>
                </div>
                <Link to="/signup?redirect=checkout">
                  <button className="text-xl leading-none w-full py-5 hover:bg-amber-400 bg-white border-amber-400 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 hover:text-white text-amber-400">
                    Go to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
