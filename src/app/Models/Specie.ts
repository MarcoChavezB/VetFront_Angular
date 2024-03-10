export interface SpecieInterface {
    id: number;
    specie_name: string;
    created_at: string;
    updated_at: string;
}

export interface SpecieResults{
   species: SpecieInterface[]
}
