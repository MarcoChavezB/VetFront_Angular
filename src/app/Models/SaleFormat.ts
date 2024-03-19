export interface SaleFormat{
  customerName: string;
  customerLastName: string;
  customerPhone: string;
  total: number
  products: productsCart[];
}

export interface productsCart{
  id: string,
  cantidad: string,
}