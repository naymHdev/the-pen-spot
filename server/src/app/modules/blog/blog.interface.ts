import mongoose from "mongoose";

// Interface for the Blog schema
export interface IBlog {
    title: string;
    slug: string;
    content: string;
    author: mongoose.Types.ObjectId;
    categories: string[];
    tags: string[];
    coverImage?: string;
    views: number;
    published: boolean;
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}