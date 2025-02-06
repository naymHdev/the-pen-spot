import { baseApi } from "@/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userStatusUpdate: builder.mutation({
      query: ({ userId }) => ({
        url: `/admins/user/${userId}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/admins/${orderId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const { useUserStatusUpdateMutation, useUpdateOrderStatusMutation } =
  adminApi;
