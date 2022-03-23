import { useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { People } from './pages/People';
import { Planets } from './pages/Planets';

export const App = () => {
  const [page, setPage] = useState('planets');

  return (
    <div className="app">
      <Navbar setPage={setPage} />

      {page === 'planets' ? <Planets /> : <People />}

      <Footer />
    </div>
  );
};
