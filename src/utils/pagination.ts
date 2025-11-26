type PaginationProps = {
  data: number[];
  _currentPage: number;
  _perPage?: number;
};

export function pagination({
  data,
  _currentPage,
  _perPage = 5,
}: PaginationProps) {
  if (data.length === 0) return;

  const startIndex = (_currentPage - 1) * _perPage;
  const endIndex = startIndex + _perPage;

  return data.slice(startIndex, endIndex);
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pagination({ data: test, _currentPage: 2 });
console.log(test);
