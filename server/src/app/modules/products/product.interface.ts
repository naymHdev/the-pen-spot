export type TProductStatus = 'available' | 'out_of_stock' | 'discontinued';

export type TProductsCategory =
  | 'Notebooks'
  | 'Pens'
  | 'Pencils'
  | 'Markers'
  | 'Erasers'
  | 'Staplers'
  | 'Folders'
  | 'Calculators'
  | 'Paper'
  | 'Books'
  | 'Other';

export type TStationeryProduct = {
  name: string;
  author?: string;
  description?: string;
  category: TProductsCategory;
  price: number;
  stockQuantity: number;
  brand?: string;
  color?: string;
  size?: string;
  material?: string;
  images: string[];
  sku: string; // Stock Keeping Unit
  rating?: number;
  isFeatured?: boolean;
  tags?: string[];
  discount?: {
    percentage: number;
    validUntil: Date;
  };
  status: TProductStatus;
};
