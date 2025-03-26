import { z } from "zod";

// Define the blog validation schema
export const blogSchema = z.object({
    body: z.object({
        title: z.string().min(5, "Title must be at least 5 characters long").max(100, "Title must be under 100 characters"),
        slug: z.string().min(5, "Slug must be at least 5 characters long").max(120, "Slug must be under 120 characters"),
        content: z.string().min(50, "Content must be at least 50 characters long"),
        author: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid author ID"),
        categories: z.array(z.string().min(2, "Category must be at least 2 characters")).min(1, "At least one category is required"),
        tags: z.array(z.string().min(2, "Tag must be at least 2 characters")).optional(),
        coverImage: z.string().url("Cover image must be a valid URL").optional(),
        views: z.number().min(0).default(0),
        likes: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID")).optional(),
        published: z.boolean().default(false),
        publishedAt: z.date().optional(),
    })
});

export const BlogValidations = {
    blogSchema
}
