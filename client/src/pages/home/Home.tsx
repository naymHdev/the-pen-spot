import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "./Banner";
import Commitment from "./Commitment";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Banner />
        <Commitment />
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
