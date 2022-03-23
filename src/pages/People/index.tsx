import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Pagination } from '../../components/Pagination';
import { Person } from '../../components/Person';
import { usePagination } from '../../hooks/usePagination';
import { usePeople } from '../../hooks/usePeople';
import './styles.css';

export const People = () => {
  const [progress, setProgress] = useState(100);
  const { page, previousPage, nextPage } = usePagination();
  const { data, isLoading, isError, isFetching } = usePeople(page);

  console.log(data);

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
      <h2>People</h2>

      <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />

      <div className="people">
        {data?.results.map((person) => (
          <Person {...person} key={person.name} />
        ))}
      </div>
    </div>
  );
};
