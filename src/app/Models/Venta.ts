export interface Venta{
  fecha_venta: string,
  total: string

  cliente: {
    nombre: string,
    telefono: string
  }  
  productos: ProductosVentaResult[]
}

export interface ProductosVentaResult{
  producto: string,
  cantidad: number
}