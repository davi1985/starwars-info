export type PersonType = {
  name: string;
  gender: string;
  birth_year: string;
};

export const Person = ({ name, gender, birth_year }: PersonType) => (
  <div className="card">
    <h3>{name}</h3>

    <p>Gender - {gender}</p>
    <p>Birth year - {birth_year}</p>
  </div>
);
