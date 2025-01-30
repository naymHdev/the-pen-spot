import { TProductsCategory } from "@/types/products.type";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  author: z.string().optional(),
  description: z.string().optional(),
  category: z.enum([
    "Notebooks",
    "Pens",
    "Pencils",
    "Markers",
    "Erasers",
    "Staplers",
    "Folders",
    "Calculators",
    "Paper",
    "Books",
    "Other",
  ] as [TProductsCategory, ...TProductsCategory[]]),
  price: z.number().min(0.01, "Price must be greater than 0"),
  stockQuantity: z.number().min(0, "Stock must be at least 0"),
  brand: z.string().optional(),
  color: z.string().optional(),
  size: z.string().optional(),
  material: z.string().optional(),
  productImg: z.string().optional(),
  sku: z.string().min(3, "SKU is required"),
  rating: z.number().min(0).max(5).optional(),
  isFeatured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  discount: z
    .object({
      percentage: z.number().min(0).max(100, "Discount must be between 0-100"),
      validUntil: z.date(),
    })
    .optional(),
  status: z.enum(["available", "out_of_stock", "discontinued"]),
});
