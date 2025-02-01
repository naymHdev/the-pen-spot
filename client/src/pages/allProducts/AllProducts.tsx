/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import TPPCard from "@/components/cards/TPPCard";
import Container from "@/components/layouts/Container";
import { TProducts } from "@/types/products.type";
import FiltersProducts from "./FiltersProducts";

const AllProducts = () => {
  const [isSideBarOpen, setSidebarOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState<Record<string, any>>({});

  const {
    data: productsData,
    isFetching,
    isLoading,
  } = useGetAllProductsQuery(
    Object.entries(filterQuery).length ? filterQuery : undefined
  );
  const isProducts: TProducts[] = productsData?.data || [];

  // console.log("productsData", productsData);

  return (
    <>
      <section className="md:mt-0 mt-[100px] relative">
        <Container>
          <section className="">
            <section>
              <div
                onClick={() => setSidebarOpen(!isSideBarOpen)}
                className="lg:hidden font-semibold text-primary-text w-full flex items-center gap-2"
              >
                <SlidersHorizontal size={18} /> Filters
              </div>

              {/* grid  */}
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 ">
                {/* Sidebar  */}
                <div
                  className={`transition-all duration-500 ${
                    isSideBarOpen
                      ? "fixed top-20"
                      : "fixed -top-full  opacity-0 pointer-events-none lg:pointer-events-auto "
                  } lg:opacity-100 bg-white/30 backdrop-blur-[70px] row-span-12 z-50 text-primary-text lg:relative lg:inset-0 w-full `}
                >
                  {/* Sidebar closing button  */}
                  <X
                    onClick={() => setSidebarOpen(!isSideBarOpen)}
                    className="lg:hidden text-gray-300 absolute top-5 right-5 z-20 text-2xl"
                  />

                  <FiltersProducts setFilterQuery={setFilterQuery} />
                </div>

                {isLoading && isFetching ? (
                  <p className="text-lg font-medium text-secondary absolute top-[50%] left-[50%]">
                    Loading...
                  </p>
                ) : isProducts.length ? (
                  isProducts.map((itm) => <TPPCard key={itm._id} {...itm} />)
                ) : (
                  <p className="text-base md:text-lg mt-4 text-center  text-secondary absolute top-[50%] left-[50%]">
                    No Products Found
                  </p>
                )}
              </div>
            </section>
          </section>
        </Container>
      </section>
    </>
  );
};

export default AllProducts;
