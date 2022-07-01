import Layout from "../../Layout/Layout";
import { useCarts, useCartsActions } from "../../Providers/CartProvider";
import { BiTrash } from "react-icons/bi";
import "./CartPage.css";
const CartPage = () => {
  const { cart, total } = useCarts();
  const dispatch = useCartsActions();
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
                    {item.offPrice * item.quantity} $
                  <div className="cartItem__off">
                    <div>
                      {(item.price - item.offPrice) * item.quantity} $ off
                    </div>
                  </div>
                  </div>
                  <div className="btnGroup">
                    <button onClick={() => decrementHandler(item)}>
                      {item.quantity > 1 ? "-" : <BiTrash color="red" />}
                    </button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incrementHandler(item)}>+</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummery">
            <h2 style={{ marginBottom: "30px" }}>Cart summery</h2>
            <div className="summeryItem">
              <p>original total price</p>
              <p> {originalTotalPrice} $</p>
            </div>
            <div className="summeryItem">
              <p>cart discount</p>
              <p>{originalTotalPrice - total} $</p>
            </div>
            <div className="summeryItem net">
              <p>net price </p>
              <p> {total} $</p>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
