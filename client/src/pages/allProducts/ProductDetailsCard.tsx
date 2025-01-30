import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap } from "lucide-react";
import ratings from "../../assets/icons/star.png";
import priceTag from "../../assets/icons/price-tag.png";
import moment from "moment";

const ProductDetailsCard = ({ details }) => {
  const {
    name,
    author,
    description,
    category,
    price,
    stockQuantity,
    brand,
    color,
    size,
    material,
    productImg,
    tags,
    discount,
    status,
  } = details || {};

  const dividedTags = tags.map((tag: string, index: string) => (
    <span key={index} className="px-1 underline">
      #{tag},
    </span>
  ));

  console.log("dividedTags", dividedTags);

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className=" col-span-1 md:col-span-4">
          <div className=" flex items-center justify-center">
            <img className=" w-full h-full py-6 px-2" src={productImg} alt="" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button className=" w-full border flex gap-1 rounded-md items-center justify-center py-4 bg-secondary text-white">
              <ShoppingCart />
              ADD TO CART
            </button>
            <button className=" w-full border flex gap-1 rounded-md items-center justify-center py-4 bg-[#FA641C] text-white">
              <Zap />
              BUY NOW
            </button>
          </div>
        </div>
        <div className=" col-span-1 md:col-span-6 px-6 overflow-auto overflow-y-scroll h-screen overflow-x-hidden hide-scrollbar">
          <div className=" ">
            <div className="font-medium text-primary-text space-y-2">
              <h3 className=" text-2xl">{name}</h3>
              <p>{description}</p>
            </div>
            <div className=" flex items-center gap-2 font-medium text-primary-text mt-4">
              <img className=" w-6" src={ratings} alt="Product Rating" />
              <img className=" w-6" src={ratings} alt="Product Rating" />
              <img className=" w-6" src={ratings} alt="Product Rating" />
              <img className=" w-6" src={ratings} alt="Product Rating" />
              <img className=" w-6" src={ratings} alt="Product Rating" />
              (999)
            </div>
            <div className=" mt-8">
              <h2 className=" text-2xl font-semibold text-primary-text">
                Tk {price}
              </h2>
              <p className=" text-secondary font-medium">
                Hurry, Only {parseInt(stockQuantity)} left!
              </p>

              <h2 className=" font-semibold text-primary-text mt-6">
                Available Offers
              </h2>
              <div className=" space-y-3 mt-2">
                <div className=" flex items-center gap-2">
                  <img className="w-7" src={priceTag} alt="offers" />
                  <p className=" font-medium text-primary-text">
                    Up to {discount.percentage}% discounted
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <img className="w-7" src={priceTag} alt="offers" />
                  <p className=" font-medium text-primary-text flex items-center gap-1">
                    <span>Valid until</span>
                    {moment(discount.validUntil).format("MMMM Do YYYY, h:mm a")}
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-10 border border-neutral-200 rounded-md">
              <div className="px-4 py-6 bg-primary-bg rounded-md">
                <h2 className=" font-semibold text-2xl text-primary-text">
                  Specifications
                </h2>
              </div>
              <div className="mt- border-t border-neutral-200">
                <div className="flex gap-20 px-4 py-6">
                  <div className=" space-y-3 font-semibold">
                    <p>Author</p>
                    <p>Brand</p>
                    <p>category</p>
                    <p>Color</p>
                    <p>Size</p>
                    <p>Material</p>
                    <p>tags</p>
                    <p>status</p>
                  </div>
                  <div className=" space-y-3 font-medium text-primary-text">
                    <p>{author}</p>
                    <p>{brand}</p>
                    <p>{category}</p>
                    <p>{color}</p>
                    <p>{size}</p>
                    <p>{material}</p>
                    <p>{dividedTags && dividedTags}</p>
                    <p>{status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
