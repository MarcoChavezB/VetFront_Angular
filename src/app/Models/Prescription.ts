export interface PrescriptionStoreInterface{
  diagnosis: string;
  observations: string;
  indications: string;
  vet_id: number;
  vet_appointment_id: number;
}

export interface PrescriptionInterface {
  id: number;
  diagnosis: string;
  observations: string;
  indications: string;
  vet_id: number;
  vet_appointment_id: number;
  created_at: string;
  updated_at: string;
}

export interface PrescriptionResults{
  prescriptions: PrescriptionInterface[];
}
