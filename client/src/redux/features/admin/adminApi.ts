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
  }),
});

export const { useUserStatusUpdateMutation } = adminApi;
