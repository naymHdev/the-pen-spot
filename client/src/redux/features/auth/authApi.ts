import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/globalTypes";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-user",
        method: "POST",
        body: userInfo,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: "/auth/all-users",
        method: "GET",
      }),
    }),

    // ✅ Update Profile API
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useUpdateProfileMutation,
  useGetUsersQuery,
} = authApi;
