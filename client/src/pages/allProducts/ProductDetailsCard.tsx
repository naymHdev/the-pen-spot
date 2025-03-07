/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCart, Zap } from "lucide-react";
import ratings from "/assets/icons/star.png";
import priceTag from "/assets/icons/price-tag.png";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "@/utils/verifyToken";

interface DecodedToken {
  role: string;
  email?: string;
}
const ProductDetailsCard = ({ details }: { details: Record<string, any> }) => {
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
    _id,
  } = details || {};

  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  // check user exists
  let user: DecodedToken | null = null;
  if (token) {
    user = verifyToken(token);
  }
  // console.log("user", user);

  const handleAddToCart = () => {
    try {
      dispatch(
        addToCart({
          product: _id,
          name: name,
          price: price,
          quantity: 1,
          stock: stockQuantity,
          image: productImg,
          userEmail: user?.email,
        })
      );

      toast.success("Product added to your cart!");
    } catch {
      toast.error("Product added failed");
    }
  };

  const handleBuy = () => {
    try {
      if (user && (user.role === "user" || user.role === "admin")) {
        dispatch(
          addToCart({
            product: _id,
            name: name,
            price: price,
            quantity: 1,
            stock: stockQuantity,
            image: productImg,
            userEmail: user?.email,
          })
        );

        toast.success("Product added to your cart!");
        navigate("/cart");
      } else {
        toast.error("Sign in before purchasing!");
        navigate("/login");
      }
    } catch {
      toast.error("Product addition failed!");
    }
  };

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className=" col-span-1 md:col-span-4">
          <div className=" flex items-center justify-center">
            <img className=" w-full h-full py-6 px-2" src={productImg} alt="" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => handleAddToCart()}
              className=" w-full border-none hover:cursor-pointer hover:scale-105 transition-transform flex gap-3 rounded-md items-center justify-center py-4 bg-secondary text-white"
            >
              <ShoppingCart />
              ADD TO CART
            </button>
            <button
              onClick={() => handleBuy()}
              className=" w-full border-none flex gap-3 rounded-md items-center justify-center py-4 bg-[#FA641C] text-white"
            >
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
                Hurry, Only {stockQuantity} left!
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
                  <div className=" space-y-3 font-semibold text-primary-text">
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
                    <p>{author ? author : "No author"}</p>
                    <p>{brand ? brand : "No brand"}</p>
                    <p>{category ? category : "Other"}</p>
                    <p>{color ? color : "No color"}</p>
                    <p>{size ? size : "No size"}</p>
                    <p>{material ? material : "No material"}</p>
                    <p>{tags && tags}</p>
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
