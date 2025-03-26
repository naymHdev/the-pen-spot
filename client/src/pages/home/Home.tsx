import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "./Banner";
import Commitment from "./Commitment";
import Testimonial from "@/components/Testimonial";
import DealOff from "./DealOff";
import CuteStationery from "./CuteStationery";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Banner />
        <Commitment />
        <CuteStationery />
        <FeaturedProducts />
        <DealOff />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
