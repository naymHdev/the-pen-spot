import { z } from 'zod';
import { ProductCategory, ProductStatus } from './product.constant';

const stationeryValidationsProductSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Product name required!' }).min(5, {
      message: 'Product name must be at least 5 characters long',
    }),
    description: z.string({ required_error: 'Description must be required' }),
    category: z.enum(ProductCategory as [string, ...string[]], {
      required_error: 'Product category is required',
    }),
    price: z.number({ required_error: 'Product price is required' }).min(0, {
      message: 'Product price must be greater than 0',
    }),
    stockQuantity: z
      .number({ required_error: 'Product quantity is required' })
      .min(0, { message: 'Product quantity must be greater than 0' }),
    brand: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    material: z.string().optional(),
    images: z
      .array(z.string().url().min(1, 'Image URL cannot be empty'))
      .min(1, 'At least one image is required')
      .nonempty({ message: 'Images array cannot be empty' }),
    sku: z.string({ required_error: 'Product SKU is required' }),
    rating: z.number().min(0).max(5),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    discount: z
      .object({
        percentage: z
          .number()
          .min(0, { message: 'Discount percentage must be at least 0' })
          .max(100, { message: 'Discount percentage cannot exceed 100' }),
        validUntil: z
          .string()
          .refine((date) => new Date(date) > new Date(), {
            message: 'Valid until date must be in the future',
          })
          .optional(),
      })
      .optional(),
    status: z.enum(ProductStatus as [string, ...string[]]).default('available'),
  }),
});

export const ProductValidations = { stationeryValidationsProductSchema };
