// Interface for the Blog schema
export interface IBlog {
  title: string;
  slug: string;
  content: string;
  author: string;
  categories: string[];
  tags: string[];
  coverImage?: string;
  views: number;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
