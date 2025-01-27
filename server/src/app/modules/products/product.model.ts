import { model, Schema } from 'mongoose';
import { TStationeryProduct } from './product.interface';
import { ProductCategory, ProductStatus } from './product.constant';

const StationeryProductSchema = new Schema<TStationeryProduct>({
  name: { type: String, required: true, trim: true, unique: true },
  description: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: {
      values: Object.values(ProductCategory),
      message: 'Needed a product category!',
    },
  },
  price: { type: Number, required: true, min: 0 },
  stockQuantity: { type: Number, required: true, min: 0 },
  brand: { type: String, trim: true },
  color: { type: String, trim: true },
  size: { type: String, trim: true },
  material: { type: String, trim: true },
  images: { type: [String], required: true },
  sku: { type: String, required: true, unique: true, trim: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  isFeatured: { type: Boolean, default: false },
  tags: { type: [String], default: [] },
  discount: {
    percentage: { type: Number, min: 0, max: 100 },
    validUntil: { type: Date },
  },
  status: {
    type: String,
    required: true,
    default: 'available',
    enum: {
      values: Object.values(ProductStatus),
      message: 'Needed a product status!',
    },
  },
});

export const StationeryProductModel = model<TStationeryProduct>(
  'StationeryProductModel',
  StationeryProductSchema,
);
