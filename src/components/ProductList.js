import Layout from "../Layout/Layout";
import { products } from "../data.js";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { BiCartAlt } from "react-icons/bi";
import { toast } from "react-toastify";
function checkInCart(cart, product) {
  return cart.find((c) => c.id === product.id);
}
const ProductList = () => {
  const { cart } = useCart();

  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    toast.success(`${product.name} added to cart ! `);
    dispatch({ type: "ADD-TO-CART", payload: product });
  };
  return (
    <Layout>
      <main className="container mx-auto ">
        <section className=" flex flex-wrap p-6 items-center justify-between ">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className=" flex flex-col justify-center items-center sm:w-1/3 md:w-1/3 xl:w-1/4 p-4 my-8 mx-auto w-full"
              >
                <img
                  src={`${product.image}`}
                  className="bg-gray-300 h-64 w-full rounded-t-lg shadow-md object-fit bg-center "
                  alt={product.name}
                />

                <div className="w-full  bg-white overflow-hidden rounded-b-lg">
                  <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                    {product.name}
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-amber-400">
                    <h1 className="text-gray-800 font-bold ">
                      ${product.offPrice}
                    </h1>
                    <BiCartAlt
                      size={30}
                      className={`cursor-pointer ${
                        checkInCart(cart, product)
                          ? "text-green-600"
                          : "text-white"
                      }`}
                      onClick={() => addProductHandler(product)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default ProductList;
