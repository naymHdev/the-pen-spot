import ProductCard from "@/components/cards/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";

const AllProducts = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);

  // console.log("productsData", productsData?.data);

  return (
    <>
      <div className=" mt-10">
        <div className=" container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-4 items-center justify-center">
            {productsData?.data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
