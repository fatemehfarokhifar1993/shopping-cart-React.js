import Layout from "../../Layout/Layout";
import { useCarts, useCartsActions } from "../../Providers/CartProvider";
import { BiTrash } from "react-icons/bi";
import "./CartPage.css";
const CartPage = () => {
  const dispatch=useCartsActions();
  const incrementHandler=(cartItem)=>{
   dispatch({type:"ADD-TO-CART",payload:cartItem})
  }
  const decrementHandler=(cartItem)=>{
    dispatch({type:"Decrement_Product",payload:cartItem})
  
  }
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
                    <button  onClick={()=>decrementHandler(item)}> {item.quantity>1?"-": <BiTrash color="red"/>}</button>
                    <button>{item.quantity}</button>
                    <button onClick={()=>incrementHandler(item)}>+</button>
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
