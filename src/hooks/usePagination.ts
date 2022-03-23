import { useState } from 'react';

export const usePagination = (totalCount: number = 60) => {
  const [page, setPage] = useState(1);

  const nextPage = (page: number) => {
    if (!totalCount) return;

    const totalPage = totalCount / 10;

    if (page >= totalPage) {
      setPage(6);

      return;
    }

    setPage(page + 1);
  };

  const previousPage = (page: number) => {
    if (!totalCount) return;

    const totalPage = totalCount / 10;

    if (page < totalPage) {
      setPage(1);

      return;
    }

    setPage(page - 1);
  };

  return { page, previousPage, nextPage };
};
