import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { TProducts } from "@/types/products.type";

const AllProducts = () => {
  const { data: productsData } = useGetAllProductsQuery(undefined);

//   console.log("productsData", productsData?.data);

  return (
    <>
      <div>
        <div className=" container mx-auto">
          <div>
            {productsData?.data?.map((product: TProducts) => (
              <div key={product._id}>
                <h1>{product.brand}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
