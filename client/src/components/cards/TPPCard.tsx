import { Link } from "react-router-dom";
import ratings from "../../../public/assets/icons/star.png";
import { TProducts } from "@/types/products.type";

export type TCardData = Pick<
  TProducts,
  | "_id"
  | "price"
  | "productImg"
  | "stockQuantity"
  | "brand"
  | "category"
  | "author"
  | "name"
>;
const TPPCard = ({
  name,
  price,
  productImg,
  stockQuantity,
  brand,
  category,
  author,
  _id,
}: TCardData) => {
  return (
    <>
      <Link
        to={`/product-details/${name
          .replace(/\s+/g, "-")
          .toLowerCase()}/${_id}`}
      >
        <div className=" flex flex-col relative group w-full mx-auto p-4 hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300">
          <div className=" flex items-center justify-center py-8">
            <img src={productImg} alt="" />
          </div>

          <div className=" space-y-2">
            <p className=" text-sm font-medium text-primary-text">{category}</p>
            <p className=" font-medium text-primary-text group-hover:text-secondary">
              {name} - ({author && author})
            </p>
            <div className=" flex items-center gap-2 font-medium text-primary-text">
              <img className=" w-4" src={ratings} alt="Product Rating" />
              <img className=" w-4" src={ratings} alt="Product Rating" />
              <img className=" w-4" src={ratings} alt="Product Rating" />
              <img className=" w-4" src={ratings} alt="Product Rating" />
              <img className=" w-4" src={ratings} alt="Product Rating" />
              (999)
            </div>
            <p className=" font-bold text-primary-text">
              Tk {price.toFixed(2)}
            </p>
            <p className=" font-medium text-md text-primary-text">
              {brand && brand}
            </p>
          </div>
          <div className=" mt-4">
            {stockQuantity > 0 ? (
              <>
                <p className=" font-medium text-green-600">In stock</p>
              </>
            ) : (
              <>
                <p className=" text-secondary font-medium">Out of stock</p>
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TPPCard;
