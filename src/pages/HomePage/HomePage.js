import Blogs from "../../components/Blogs";
import Brands from "../../components/Brands";
import Carousel from "../../components/Carousel";
import Offers from "../../components/Offers";
import ProductList from "../../components/ProductList";
import ScrollImages from "../../components/ScrollImages";
import Layout from "../../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      <Offers />
      <ProductList />
      <Blogs />
      <Brands />
      <ScrollImages />
      <br />
      <br /> <br />
      <br /> <br />
      <br />
    </Layout>
  );
};

export default HomePage;
