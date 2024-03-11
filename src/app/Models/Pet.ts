export interface PetRegisterInterface {
  name: string;
  gender: string;
  specie_id: number;
  user_id: number;
}

export interface PetInterface {
  id: number,
  name: string,
  gender: string,
  specie_id: number,
  user_id: number,
  created_at: string,
  updated_at: string
}

export interface PetResults {
  pets: PetInterface[]
}
