import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/globalTypes";
import { TProducts } from "@/types/products.type";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //-------- Get All Products ---------||
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products/get-all-stationary-products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (
        response: TResponseRedux<{ result: TProducts[] }>
      ) => {
        // console.log("response", response);
        return {
          data: response?.data?.result,
          meta: response?.data?.meta,
        };
      },
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create-stationary-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;
