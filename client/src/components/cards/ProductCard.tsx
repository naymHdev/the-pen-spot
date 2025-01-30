import ratings from "../../assets/icons/star.png";
const ProductCard = ({ product }) => {
  const { name, price, productImg, stockQuantity, brand, category, author } =
    product || {};

  return (
    <>
      <div className=" flex flex-col relative group w-full h-full mx-auto p-4 hover:cursor-pointer hover:shadow-lg transition-shadow">
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
            Tk {parseInt(price).toFixed(2)}
          </p>
          <p className=" font-medium text-md text-primary-text">
            {brand && brand}
          </p>
        </div>
        <div className=" mt-4">
          {parseInt(stockQuantity) > 0 ? (
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
    </>
  );
};

export default ProductCard;
