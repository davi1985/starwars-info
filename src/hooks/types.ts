export type Planet = {
  name: string;
  population: string;
  terrain: string;
};

export type PlanetsResponse = {
  planets: Planet[];
};

export type GetPlanetsResponse = {
  count: number;
  results: Planet[];
};

export type Person = {
  name: string;
  gender: string;
  birth_year: string;
};

export type GetPeopleResponse = {
  count: number;
  results: Person[];
};

export type PeopleResponse = {
  people: Person[];
};
