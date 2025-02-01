/* eslint-disable @typescript-eslint/no-explicit-any */
const FiltersProducts = ({ setFilterQuery }) => {
  // Handle Input Change for Filters
  const handleFilterChange = (name: string, value: any) => {
    setFilterQuery((prev) => ({ ...prev, [name]: value }));
  };

  // Reset Filters
  const resetFilters = () => {
    setFilterQuery({});
  };

  return (
    <>
      <aside className=" inset-0 top-24 w-full text-primary-text p-6">
        <div>
          <h2 className=" font-semibold text-lg text-primary-text border-b pb-3 border-neutral-400">
            Filters
          </h2>
          <aside className=" mt-6">
            {/* Search */}
            <h3 className="mt-4 mb-1 font-medium text-primary-text">Search</h3>
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full p-2 border-b border-neutral-300 focus:outline-none"
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
            />

            {/* Price Range */}
            <h3 className="mt-4 mb-1 font-medium text-primary-text">
              Price Range
            </h3>
            <input
              type="number"
              placeholder="Min Price"
              className="w-full p-2 border-b border-neutral-300 focus:outline-none"
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="w-full p-2 border-b border-neutral-300 focus:outline-none mt-2"
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            />

            {/* Category */}
            <h3 className="mt-4 mb-1 font-medium text-primary-text">
              Category
            </h3>
            <select
              className="w-full p-2 border-b border-neutral-300 focus:outline-none"
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">All</option>
              <option value="Notebooks">Notebooks</option>
              <option value="Calculators">Calculators</option>
              <option value="Pens">Pens</option>
              <option value="Pencils">Pencils</option>
              <option value="Markers">Markers</option>
              <option value="Erasers">Erasers</option>
              <option value="Staplers">Staplers</option>
              <option value="Folders">Folders</option>
            </select>

            {/* Availability */}
            <h3 className="mt-4 mb-1 font-medium text-primary-text">
              Availability
            </h3>
            <select
              className="w-full p-2 border-b border-neutral-300 focus:outline-none"
              onChange={(e) =>
                handleFilterChange("availability", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>

            {/* Reset Filters */}
            <button
              onClick={resetFilters}
              className="mt-6 mb-1 w-full p-2 bg-secondary text-primary-bg duration-300 transition-transform hover:scale-105 hover:cursor-pointer rounded-full"
            >
              Reset Filters
            </button>
          </aside>
        </div>
      </aside>
    </>
  );
};

export default FiltersProducts;
