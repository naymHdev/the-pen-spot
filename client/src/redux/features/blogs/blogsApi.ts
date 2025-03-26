import { baseApi } from "@/redux/api/baseApi";
import { IBlog } from "@/types/blogs.type";
import { TResponseRedux } from "@/types/globalTypes";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: "/blogs",
          method: "GET",
        };
      },
      providesTags: ["blogs"],
      transformResponse: (response: TResponseRedux<{ result: IBlog[] }>) => {
        console.log("response", response);
        return {
          data: response?.data?.result,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogsApi;
