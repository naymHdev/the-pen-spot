import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

// Schema for Blog Posts
const BlogSchema = new Schema<IBlog>(
    {
        title: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true },
        content: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: "UserModel", required: true },
        categories: [{ type: String, required: true }],
        tags: [{ type: String, required: true }],
        coverImage: { type: String, required: true },
        views: { type: Number, default: 0 },
        published: { type: Boolean, default: false },
        publishedAt: { type: Date },
    },
    { timestamps: true }
);

// Export the model
const Blog = model<IBlog>("Blog", BlogSchema);
export default Blog