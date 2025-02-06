import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["orders"],
    }),
    getOrders: builder.query({
      query: () => {
        return {
          url: "/orders",
          method: "GET",
        };
      },
      providesTags: ["orders"],
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
} = orderApi;
