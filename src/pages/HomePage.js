import Layout from "../Layout/Layout";
import * as data from "../data.js";
const HomePage = () => {
  const addProductHandler = (product) => {};
  return (
    <Layout>
      <main className="bd-container">
        <section className=" productList">
          {data.products.map((product) => {
            return (
              <div className="product">
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
                <button
                  onClick={() => addProductHandler(product)}
                  className="btn primary"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
