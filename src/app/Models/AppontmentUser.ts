export interface AppointmentUser {
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

export interface AppointmentUserResults {
  info: AppointmentUser[];
}