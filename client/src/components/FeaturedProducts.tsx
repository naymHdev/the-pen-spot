import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import TPPCard from "./cards/TPPCard";
import { Link } from "react-router-dom";
import TPButton from "./buttons/TPButton";

const FeaturedProducts = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);

  const isFeatured = productsData?.data?.filter(
    (itm) => itm.isFeatured === false
  );

  return (
    <>
      <div className="relative container mx-auto mt-20">
        <div className=" flex items-center justify-between">
          <div>
            <h2 className=" font-semibold text-2xl text-primary-text">
              Flash Deals
            </h2>
            <p className=" font-medium text-secondary mt-1">Up to 65% off</p>
          </div>
          <Link to="/all-products">
            <TPButton
              className="border hover:bg-secondary hover:border-neutral-100 hover:text-white"
              text="View all"
            />
          </Link>
        </div>
        <div className="mt-6">
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={20}
            pagination={{
              type: "fraction",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {isFeatured?.map((itm) => (
              <div key={itm._id}>
                <SwiperSlide>
                  <TPPCard
                    _id={itm._id}
                    name={itm.name}
                    price={itm.price}
                    productImg={itm.productImg}
                    stockQuantity={itm.stockQuantity}
                    brand={itm.brand}
                    author={itm.author}
                    category={itm.category}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
