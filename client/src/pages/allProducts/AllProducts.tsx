import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { TProducts } from "@/types/products.type";

const AllProducts = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);

    console.log("productsData", productsData?.data);

  return (
    <>
      <div>
        <div className=" container mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {productsData?.data?.map((product: TProducts) => (
              <div key={product?._id}>
                <h1>{product.brand}</h1>
                <img src={product?.productImg} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
