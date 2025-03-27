// Interface for the Blog schema
export interface IBlog {
  category: any;
  _id?: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  categories: string[];
  tags: string[];
  coverImage?: string;
  views: number;
  published: boolean;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
