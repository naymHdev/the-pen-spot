import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import { TProducts } from "@/types/products.type";

const ProductDetails = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);
  const { id } = useParams();

  const productDetails = productsData?.data?.filter((itm) => itm._id === id);

  return (
    <>
      <div className=" container mx-auto mt-4">
        {productDetails?.map((details: TProducts) => (
          <ProductDetailsCard key={details._id} details={details} />
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
