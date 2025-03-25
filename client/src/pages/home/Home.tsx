import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "./Banner";
import Commitment from "./Commitment";
import Testimonial from "@/components/Testimonial";
import DealOff from "./DealOff";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Banner />
        <Commitment />
        <FeaturedProducts />
        <DealOff />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
