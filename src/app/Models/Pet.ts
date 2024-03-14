export interface PetRegisterInterface {
  name: string;
  gender: string;
  specie_id: number;
  user_id: number;
}

export interface PetUpdateInterface {
  name: string;
  gender: string;
  specie_id: number;
}

export interface PetInterface {
  id: number,
  name: string,
  gender: string,
  specie_id: number,
  user_id: number,
  created_at: string,
  updated_at: string,
}

export interface PetResults {
  pets: PetInterface[]
}

export interface PetResult{
  pet: PetUpdateResult[]
}

export interface PetUpdateResult{
  id: number,
  name: string,
  gender: string,
  specie_id: number,
  user_id: number,
  created_at: string,
  updated_at: string,
  specie: string
}

export interface PetIndexInterface {
  id: number,
  name: string,
  gender: string,
  specie_id: number,
  user_id: number,
  created_at: string,
  updated_at: string,
  specie: string,
  owner: string
}

export interface PetIndexResults {
  pets: PetIndexInterface[]
}
