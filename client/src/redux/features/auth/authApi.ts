import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/types/globalTypes";
import { TUser } from "@/types/user.types";

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
      invalidatesTags: ["user"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users/all-users",
          method: "GET",
        };
      },
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<{ result: TUser[] }>) => {
        // console.log("response_api", response);
        return {
          data: response?.data,
        };
      },
    }),

    // ✅ Update Profile API
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["user"],
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          // Optimistically update cache before API call
          dispatch(
            baseApi.util.updateQueryData("getMe", undefined, (draft: TUser) => {
              return { ...draft, ...userData };
            })
          );
          await queryFulfilled;
        } catch (error) {
          console.error("Profile update failed", error);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
} = authApi;
