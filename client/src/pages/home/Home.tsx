import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "./Banner";
import Commitment from "./Commitment";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Banner />
        <Commitment />
        <FeaturedProducts />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
