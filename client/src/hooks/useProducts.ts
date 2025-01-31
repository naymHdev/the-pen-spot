import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";

export const useProducts = () => {
  const { searchQuery, filters, sortBy } = useSelector(
    (state: RootState) => state.product
  );

  // Use the `filters` and `sortBy` directly in the query
  const {
    data: products,
    isFetching,
    isLoading,
    error,
  } = useGetAllProductsQuery({
    searchQuery,
    filters,
    sortBy,
  });

  return {
    products,
    isFetching,
    isLoading,
    error,
  };
};
