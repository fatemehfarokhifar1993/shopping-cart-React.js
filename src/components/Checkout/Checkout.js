import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Checkout.css";
const Checkout = () => {
  const userData = useAuth();
  const { cart, total } = useCart();
  if (!cart.length)
    return (
      <main className="container mx-auto ">
        <div className="m-32 flex items-center justify-center font-bold text-lg  p-20">
          <Link to="/" className="text-black hover:text-amber-400">
            go to shopping?
          </Link>
        </div>
      </main>
    );

  return (
    <>
      {userData ? (
        <main className="container mx-auto mt-20 ">
          <section className="flex items-start lg:flex-row flex-col justify-end p-6">
            <div className="lg:w-2/3  w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 ">
              <h3 className="border-b-2  border-amber-600 text-center mb-8 text-lg">
                checkout detial
              </h3>
              <div className="p-4">
                <p className="text-md">
                  Name is :
                  <span className="text-amber-500">{userData.name}</span>
                </p>
                <p className="text-md">
                  Email is :
                  <span className="text-amber-500">{userData.email}</span>
                </p>
                <p className="text-md">
                  PhoneNumber is :
                  <span className="text-amber-500">{userData.phoneNumber}</span>
                </p>
              </div>
            </div>
            <div className="lg:w-1/3  w-full bg-amber-100 ">
              <div className="flex flex-col lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                {cart &&
                  cart.map((c) => {
                    return (
                      <div>
                        $ {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                      </div>
                    );
                  })}

                <div className="border-t-2  border-amber-600 text-lg">
                  Total price :<span className="text-green-600">$ {total}</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="container mx-auto ">
          <div className="m-32 flex items-center justify-center font-bold text-lg  p-20">
            <p className="">please login !</p>
          </div>
        </main>
      )}
    </>
  );
};

export default Checkout;
