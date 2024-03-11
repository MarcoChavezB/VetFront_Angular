export interface AppointmentStoreInterface {
  pet_id: number;
  user_id: number;
  appointment_date: string;
  reason: string;
}

export interface AppointmentInterface{
  id: number;
  pet_id: number;
  user_id: number;
  appointment_date: string;
  reason: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: string;
  pet: string;
}

export interface AppointmentResults {
  vet_appointments: AppointmentInterface[];
}
