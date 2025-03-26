import TPPCard from "@/components/cards/TPPCard";
import Container from "@/components/layouts/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { categories } from "@/data/category";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { TProducts } from "@/types/products.type";
import { useState } from "react";

const CuteStationery = () => {
  const {
    data: productsData,
    isFetching,
    isLoading,
  } = useGetAllProductsQuery(undefined);
  const isProducts: TProducts[] = productsData?.data || [];

  // Filter categories that have at least one product
  const availableCategories = categories.filter((category) =>
    isProducts.some((product) => product.category === category)
  );

  const [filterQuery, setFilterQuery] = useState(availableCategories[0] || "");
  const filteredProducts = isProducts.filter(
    (itm) => itm.category === filterQuery
  );

  return (
    <Container className="mt-10 lg:mt-20">
      <h2 className="font-semibold text-3xl text-primary-text text-center">
        Cute Stationery
      </h2>
      {availableCategories.length > 0 ? (
        <div>
          <Tabs
            className="flex items-center justify-center"
            defaultValue={filterQuery}
            onValueChange={setFilterQuery}
          >
            <TabsList className="mt-5 flex items-center justify-center">
              {availableCategories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="text-lg font-medium data-[state=active]:p-0 data-[state=active]:shadow-none data-[state=active]:text-secondary data-[state=active]:border-b data-[state=active]:border-b-secondary rounded-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent
              value={filterQuery}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center"
            >
              {isLoading || isFetching
                ? Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-full bg-gray-300 h-40 rounded-lg"
                    />
                  ))
                : filteredProducts.map((itm) => (
                    <TPPCard key={itm._id} {...itm} />
                  ))}
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground mt-5">
          No categories with available products.
        </p>
      )}
    </Container>
  );
};

export default CuteStationery;
