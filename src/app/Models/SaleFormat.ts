export interface SaleFormat{
  customerName: string;
  customerLastName: string;
  customerPhone: string;
  products: productsCart[];
}

export interface productsCart{
  id: string,
  cantidad: string,
  total: string
}