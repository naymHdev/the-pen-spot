import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap } from "lucide-react";

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
    rating,
    isFeatured,
    tags,
    discount,
    status,
  } = details || {};

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className=" col-span-1 md:col-span-4">
          <div className=" flex items-center justify-center">
            <img className=" w-full h-full py-6 px-2" src={productImg} alt="" />
          </div>
          <div className=" flex items-center justify-center gap-2">
            <Button className=" w-full border flex items-center bg-secondary text-white">
              <ShoppingCart />
              ADD TO CART
            </Button>
            <Button className=" w-full border flex items-center bg-[#FA641C] text-white">
              <Zap />
              BUY NOW
            </Button>
          </div>
        </div>
        <div className=" col-span-1 md:col-span-6"></div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
