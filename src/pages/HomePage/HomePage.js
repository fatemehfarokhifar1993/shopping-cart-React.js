import Blogs from "../../components/Blogs";
import Brands from "../../components/Brands";
import Carousel from "../../components/Carousel";
import Offers from "../../components/Offers";
import ProductList from "../../components/ProductList";
import Layout from "../../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      <Offers />
      <ProductList />
      <Blogs />
      <Brands />
    </Layout>
  );
};

export default HomePage;
