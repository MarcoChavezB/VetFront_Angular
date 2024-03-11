export interface Category {
  id: number;
  category: string;
  updated_at: string;
  created_at: string;
  description: string;
}

export interface CategoryResult {
  categories: Category[];
}