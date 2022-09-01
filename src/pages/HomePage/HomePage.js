
import Brands from "../../components/Brands";
import Carousel from "../../components/Carousel";
import ProductList from "../../components/ProductList";
import Layout from "../../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Carousel/>
     <ProductList/>
     <Brands/>
    </Layout>
  );
};

export default HomePage;
