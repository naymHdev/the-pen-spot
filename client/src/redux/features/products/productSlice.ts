import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ProductState {
  search: string;
  filter: Record<string, string>;
  sort: string;
}

const initialState: ProductState = {
  search: "",
  filter: {},
  sort: "createdAt",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<Record<string, string>>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setFilter, setSort } = productSlice.actions;

export const selectProductState = (state: RootState) => state.product;

export default productSlice.reducer;
