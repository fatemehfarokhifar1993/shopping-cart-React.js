import Layout from "../../Layout/Layout";
import * as data from "../../data.js";
import { useCart, useCartActions } from "../../Providers/CartProvider";
import "./HomePage.css";
import { toast } from "react-toastify";
function checkInCart(cart, product) {
  return cart.find((c) => c.id === product.id);
}
const HomePage = () => {
  const { cart } = useCart();

  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    toast.success(`${product.name} added to cart ! `);
    dispatch({ type: "ADD-TO-CART", payload: product });
  };
  return (
    <Layout>
      <main className="bd-container">
        <section className=" productList">
          {data.products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <h3 className="productDesc-title">{product.name}</h3>
                  <div className="productDesc-price-offprice">
                    <h3 className={`${product.discount && "productDesc-offprice"}`}>
                      {product.discount ? product.offPrice : product.price} $
                    </h3>
                    <h4
                      className={`${product.discount && "productDesc-price"}`}
                    >
                      {product.discount ? product.price :<div style={{visibility:"hidden"}}>0</div>}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => addProductHandler(product)}
                  className={`btn ${checkInCart(cart, product) && "btn-incart"}`}
                >
                  {checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
                </button>
                <div className={`${product.discount ?"product-discount":"none"}`}>{product.discount}%</div>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
