import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Checkout.css"
const Checkout = () => {
  const userData = useAuth();
  const { cart, total } = useCart();
  if (!cart.length)
  return (
    <>
      <Link to="/"> go to shoppung? </Link>
    </>
  );

  return (
    <>
        {userData ? (
          <section className="Checkout">
            <section className="Checkout-ItemList">
              <h3>checkout detial</h3>
              <p>name : {userData.name}</p>
              <p>email : {userData.email}</p>
              <p>phoneNumber: {userData.phoneNumber}</p>
            </section>
            <section className="Checkout-Summery">
              {cart &&
                cart.map((c) => {
                  return (
                    <div>
                      {c.name} * {c.quantity} : {c.quantity * c.offPrice} $
                    </div>
                  );
                })}
              <hr />
              <div style={{color:"green"}}>total price : {total} $</div>
            </section>
          </section>
        ) : (
          <p>please login !</p>
        )}
    </>  
  );
};

export default Checkout;
