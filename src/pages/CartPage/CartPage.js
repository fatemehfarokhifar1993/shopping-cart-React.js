import Layout from "../../Layout/Layout";
import { useCarts } from "../../Providers/CartProvider";
import "./CartPage.css";
const CartPage = () => {
  const { cart } = useCarts();
  if (!cart.length)
    return (
      <Layout>
        <main className="bd-container">
          <section>
            <p>cart id empty!</p>
          </section>
        </main>
      </Layout>
    );
  return (
    <Layout>
      <main className="bd-container">
        <section className=" cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="itemImg">
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div className="item-Name">{item.name}</div>
                  <div className="item-price">
                    {item.offPrice * item.quantity}
                  </div>
                  <div className="btnGroup">
                    <button>-</button>
                    <button>{item.quantity}</button>
                    <button>+</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummery">cart summery</section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
