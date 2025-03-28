import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";

export const useProducts = () => {
  const { search, filter, sort } = useSelector(
    (state: RootState) => state.product
  );

  // Use the `filter` and `sort` directly in the query
  const {
    data: products,
    isFetching,
    isLoading,
    error,
  } = useGetAllProductsQuery({
    search,
    filter,
    sort,
  });

  return {
    products,
    isFetching,
    isLoading,
    error,
  };
};
