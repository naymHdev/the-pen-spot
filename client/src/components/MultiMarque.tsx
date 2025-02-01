import { clientTestimonial } from "@/data/clientTestimonials";
import Marquee from "react-fast-marquee";

const MultiMarque = () => {
  return (
    <>
      <div className=" mt-10 ">
        <Marquee pauseOnHover={true}>
          <div className="flex items-center justify-center gap-4">
            {clientTestimonial?.map((itm) => (
              <div
                key={itm.id}
                className=" border border-neutral-200 shadow rounded-full px-2 py-1 flex gap-2 items-center"
              >
                <img
                  className=" w-14 h-14 rounded-full p-1"
                  src={itm.image}
                  alt={itm.name}
                />
                <p className="font-medium text-primary-text">
                  {itm.review.slice(0, 50)}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" mt-4">
        <Marquee direction="right" pauseOnHover={true}>
          <div className="flex items-center justify-center gap-4">
            {clientTestimonial?.map((itm) => (
              <div
                key={itm.id}
                className=" border border-neutral-200 shadow rounded-full px-2 py-1 flex gap-2 items-center"
              >
                <img
                  className=" w-14 h-14 rounded-full p-1"
                  src={itm.image}
                  alt={itm.name}
                />
                <p className="font-medium text-primary-text">
                  {itm.review.slice(0, 50)}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" mt-4">
        <Marquee pauseOnHover={true}>
          <div className="flex items-center justify-center gap-4">
            {clientTestimonial?.map((itm) => (
              <div
                key={itm.id}
                className=" border border-neutral-200 shadow rounded-full px-2 py-1 flex gap-2 items-center"
              >
                <img
                  className=" w-14 h-14 rounded-full p-1"
                  src={itm.image}
                  alt={itm.name}
                />
                <p className="font-medium text-primary-text">
                  {itm.review.slice(0, 50)}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MultiMarque;
