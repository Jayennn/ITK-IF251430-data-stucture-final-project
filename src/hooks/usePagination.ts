import { useState } from 'react';

export function usePagination<T>(data: T[], _perPage: number = 5) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * _perPage;
  const endIndex = startIndex + _perPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / _perPage);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    data: paginatedData,
  };
}
