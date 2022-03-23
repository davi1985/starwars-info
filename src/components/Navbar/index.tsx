type NavbarProps = {
  setPage: (value: string) => void;
};

import './styles.css';

export const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <nav>
      <h1>Star Wars Info</h1>

      <a onClick={() => setPage('planets')}>Planets</a>
      <a onClick={() => setPage('people')}>People</a>
    </nav>
  );
};
