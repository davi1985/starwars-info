type PaginationProps = {
  page: number;
  previousPage: (args: number) => void;
  nextPage: (args: number) => void;
};

import './styles.css';

export const Pagination = ({
  page,
  previousPage,
  nextPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <button onClick={() => previousPage(page)}>Previous Page</button>
      <button onClick={() => nextPage(page)}>Next Page</button>
    </div>
  );
};
