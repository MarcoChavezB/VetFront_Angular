export interface log{
    _id: string;
    id_usuario: number,
    endpoint: string;
    method: string;
    data_sent: [];
    data_received: [],
    date: string,
    updated_at: string;
    created_at: string;
  }

  export interface logsresponse{
    data: log[];
    success: boolean; 
  }