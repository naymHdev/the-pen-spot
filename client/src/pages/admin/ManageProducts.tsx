import TPPCard from "@/components/cards/TPPCard";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";

const ManageProducts = () => {
  const { data: allProducts } = useGetAllProductsQuery(undefined);

  return (
    <>
      <div>
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          Manage Products
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {allProducts?.data
            ?.slice()
            .reverse()
            .map((itm) => (
              <TPPCard key={itm._id} {...itm} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
