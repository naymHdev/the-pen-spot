export type TDiscount = {
  percentage: number;
  validUntil: string;
};

export type TProducts = {
  _id: string;
  discount: TDiscount;
  name: string;
  author: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  brand: string;
  color: string;
  size: string;
  material: string;
  images: string[];
  sku: string;
  rating: number;
  isFeatured: boolean;
  tags: string[];
  status: string;
};
