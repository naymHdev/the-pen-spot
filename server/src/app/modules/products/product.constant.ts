import { TProductsCategory, TProductStatus } from './product.interface';

export const ProductCategory: TProductsCategory[] = [
  'Notebooks',
  'Pens',
  'Pencils',
  'Markers',
  'Erasers',
  'Staplers',
  'Folders',
  'Calculators',
  'Paper',
  'Other',
];

export const ProductStatus: TProductStatus[] = [
  'available',
  'out_of_stock',
  'discontinued',
];
