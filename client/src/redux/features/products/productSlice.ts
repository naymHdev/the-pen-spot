import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ProductState {
  searchQuery: string;
  filters: Record<string, string>;
  sortBy: string;
  // Add other fields for product data as necessary
}

const initialState: ProductState = {
  searchQuery: "",
  filters: {},
  sortBy: "createdAt", // Default sorting order
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action: PayloadAction<Record<string, string>>) => {
      state.filters = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchQuery, setFilters, setSortBy } = productSlice.actions;

export const selectProductState = (state: RootState) => state.product;

export default productSlice.reducer;
