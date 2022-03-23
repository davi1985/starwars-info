export type PlanetType = {
  name: string;
  population: string;
  terrain: string;
};

export const Planet = ({ name, population, terrain }: PlanetType) => (
  <div className="card">
    <h3>{name}</h3>

    <p>Population - {population}</p>
    <p>Terrain - {terrain}</p>
  </div>
);
