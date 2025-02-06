import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/types/globalTypes";
import { Order } from "@/types/orderDetails.types";

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
      transformResponse: (response: TResponseRedux<{ result: Order[] }>) => {
        // console.log("response", response);
        return {
          data: response?.data?.result,
          meta: response?.data,
        };
      },
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
