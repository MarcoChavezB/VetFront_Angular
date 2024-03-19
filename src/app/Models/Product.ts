export interface productResult{
  products: product[];
  message: string; 
}
export interface product{
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number; // Cambiado a tipo numérico
  stock: number;
  updated_at: string;
  created_at: string;
  is_active: number;
  category: {
    id: number;
    category: string;
  };
  cantidad: number;
  totalPrice: number;
}
