export interface service{
    id: number;
    name: string;
    description: string;
    price: number;
    updated_at: string;
    created_at: string;
  }

  export interface servicesAll{
    services: service[];
    status: boolean; 
  }

  export interface newservice{
    name: string;
    description: string;
    price: string;
  }

  export interface status{
    status: boolean; 
  }