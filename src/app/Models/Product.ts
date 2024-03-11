export interface product{
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  updated_at: string;
  created_at: string;
  is_active: number;
}
export interface productResult{
  products: product[];
}