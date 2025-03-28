import { clientTestimonial } from "@/data/clientTestimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import rating from "../../public/assets/icons/star.png";
import Container from "./layouts/Container";

const Testimonial = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="">
          <h2 className="text-2xl font-semibold text-primary-text text-center mb-6">
            What Client Says
          </h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 4,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {clientTestimonial?.map((itm) => (
              <SwiperSlide key={itm.id}>
                <div className="mt-4 border rounded-lg p-4 shadow-md border-neutral-300 bg-primary-bg text-center">
                  <img
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                    src={itm.image}
                    alt={itm.name}
                  />
                  <h3 className="text-lg font-semibold text-primary-text">
                    {itm.name}
                  </h3>
                  <p className="text-sm text-foreground font-medium">
                    {itm.review}
                  </p>
                  <div className="mt-4 flex gap-1 items-center justify-center">
                    <img className=" w-5" src={rating} alt="" />
                    <img className=" w-5" src={rating} alt="" />
                    <img className=" w-5" src={rating} alt="" />
                    <img className=" w-5" src={rating} alt="" />
                    <img className=" w-5" src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
