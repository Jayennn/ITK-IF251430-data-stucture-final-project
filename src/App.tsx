import { ArrowUp, Search } from 'lucide-react';
import { useDictionary } from './hooks/useDictionary';
import { usePagination } from './hooks/usePagination';
import { cn } from './lib/utils';
import React, { useState } from 'react';

function App() {
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const { results, search } = useDictionary();
  const { data, totalPages, currentPage, setCurrentPage } = usePagination(
    results,
    5
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCurrentPage(1);
    search(keyword);
    setHasSearched(true);
  }

  return (
    <div className="min-h-screen bg-[#F0E7D5] text-[#212842]">
      <div className="h-screen flex flex-col items-center justify-center container max-w-3xl mx-auto font-geist px-4">
        {/* Header */}
        <div className="pt-20 flex items-center justify-center">
          <div className="text-4xl font-semibold tracking-tighter">
            Ambatupedia!
          </div>
        </div>

        {/* Sticky Search Form */}
        <div className="sticky top-6 z-10 py-4 w-full">
          <form
            onSubmit={onSubmit}
            className="bg-[#F0E7D5] w-full max-w-xl mx-auto flex items-center justify-between border border-[#212842] h-12 rounded-full shadow-sm"
          >
            <div className="w-full flex items-center p-4">
              <Search size={16} />
              <input
                onChange={(e) => setKeyword(e.target.value)}
                className="ml-3 w-full outline-0 bg-transparent"
                type="text"
                value={keyword}
                placeholder="e.g Pesawat"
              />
            </div>
            <div className="px-1.5">
              <button
                disabled={!keyword}
                type="submit"
                className={cn(
                  'inline-flex items-center justify-center h-9 w-9 px-4 py-2 rounded-full',
                  !keyword ? 'disabled:bg-[#212842]/50' : 'bg-[#212842]'
                )}
              >
                <span className="text-[#F0E7D5] inline-flex items-center justify-center p-0 m-0 w-6 h-6">
                  <ArrowUp size={16} />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="w-full mt-4 pb-8 grid grid-cols-1 gap-2">
          {!hasSearched ? null : data.length >= 1 ? (
            data.map(({ keyword_id, definition }) => {
              return (
                <div
                  key={keyword_id}
                  className="border border-[#212842] rounded-md"
                >
                  <div className="flex flex-col py-6 px-4 gap-2">
                    <h2 className="capitalize font-bold tracking-tighter text-3xl">
                      {keyword_id}
                    </h2>
                    <p className="text-base/8 text-justify">{definition}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full">
              <p className="text-center">Data tidak ditemukan</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 ? (
          <div className="w-full my-4 flex items-center justify-between">
            Total Pages: {totalPages}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;

                return (
                  <button
                    onClick={() => setCurrentPage(pageNumber)}
                    key={index}
                    className={cn(
                      'border border-[#212842] w-8 h-8 rounded transition-colors',
                      isActive
                        ? 'bg-[#212842] text-[#F0E7D5]'
                        : 'hover:bg-[#212842] hover:text-[#F0E7D5]'
                    )}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
