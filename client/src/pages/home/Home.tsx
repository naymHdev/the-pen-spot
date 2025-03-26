import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "./Banner";
import Commitment from "./Commitment";
import Testimonial from "@/components/Testimonial";
import DealOff from "./DealOff";
import CuteStationery from "./CuteStationery";
import FromOurBlog from "./FromOurBlog";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Banner />
        <Commitment />
        <CuteStationery />
        <DealOff />
        <FeaturedProducts />
        <Testimonial />
        <FromOurBlog />
      </div>
    </>
  );
};

export default Home;
