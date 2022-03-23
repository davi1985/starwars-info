import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Pagination } from '../../components/Pagination';
import { Planet } from '../../components/Planet';
import { usePagination } from '../../hooks/usePagination';
import { usePlanets } from '../../hooks/usePlanets';
import './styles.css';

export const Planets = () => {
  const [progress, setProgress] = useState(100);
  const { page, nextPage, previousPage } = usePagination();
  const { data, isLoading, isError, isFetching } = usePlanets(page);

  if (isLoading || isFetching)
    return (
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    );

  if (isError) return <div>Error :(</div>;

  return (
    <div className="content">
      <h2>Planets</h2>

      <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />

      <div className="planets">
        {data?.results.map((planet) => (
          <Planet {...planet} key={planet.name} />
        ))}
      </div>
    </div>
  );
};
