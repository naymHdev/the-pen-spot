/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import TPPCard from "@/components/cards/TPPCard";
import Container from "@/components/layouts/Container";
import { TProducts } from "@/types/products.type";
import FiltersProducts from "./FiltersProducts";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/skeleton";
import { TQueryParam } from "@/types/globalTypes";

const AllProducts = () => {
  const [isSideBarOpen, setSidebarOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState<TQueryParam[] | undefined>(
    undefined
  );
  const {
    data: productsData,
    isFetching,
    isLoading,
  } = useGetAllProductsQuery(filterQuery);
  const isProducts: TProducts[] = productsData?.data || [];

  return (
    <div className="md:mt-0 mt-[100px] relative">
      <Container>
        {/* Top Bar Filter Button (Mobile) */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-primary flex items-center gap-2 px-4 py-2"
          >
            <SlidersHorizontal size={20} /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Sidebar - Always visible on large screens, slides in on mobile */}
          <aside
            className={clsx(
              "lg:col-span-2 lg:relative bg-white lg:bg-transparent h-screen lg:h-auto transition-transform duration-500 ease-in-out z-50 absolute top-0",
              isSideBarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            )}
          >
            {/* Close Button (Mobile) */}
            <div className="lg:hidden flex justify-end p-4">
              <div className="flex items-center justify-center border rounded-full px-1 h-8 w-8">
                <X
                  onClick={() => setSidebarOpen(false)}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>

            <FiltersProducts setFilterQuery={setFilterQuery} />
          </aside>
          <div className="lg:col-span-5">
            <div className="h-screen overflow-auto hide-scrollbar grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {/* Check if loading or fetching */}
              {isLoading || isFetching ? (
                // Skeleton loading state
                Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="p-4 bg-slate-400 animate-pulse">
                    <Skeleton />
                    <Skeleton className="mt-4" />
                    <Skeleton className="mt-2" />
                  </div>
                ))
              ) : // Check if no products are available
              isProducts.length === 0 ? (
                <div className="col-span-full text-center text-lg text-secondary mt-20 font-semibold">
                  No products available!!!
                </div>
              ) : (
                // Render products if available
                isProducts.map((itm) => <TPPCard key={itm._id} {...itm} />)
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
