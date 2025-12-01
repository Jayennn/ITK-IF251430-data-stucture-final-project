import { ArrowUp, Search } from 'lucide-react';
import { useDictionary } from './hooks/useDictionary';
import { usePagination } from './hooks/usePagination';
import { cn } from './lib/utils';
import React, { useState } from 'react';
import { Language } from './models/entry';
import { useSuggestions } from './hooks/useSuggestion';

function App() {
  const [hideSuggestion, setHideSuggestions] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const {
    results,
    search,
    language,
    setLanguage,
    component: Anything,
  } = useDictionary();
  const { data, totalPages, currentPage, setCurrentPage } = usePagination(
    results,
    5
  );

  const suggestions = useSuggestions(keyword, 300);

  const showSuggestions =
    keyword.length > 0 && suggestions.length > 0 && !hideSuggestion;

  function handleSuggestionClick(suggestion: string) {
    setKeyword(suggestion);
    setHideSuggestions(true);
    setCurrentPage(1);
    search(suggestion);
    setHasSearched(true);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHideSuggestions(true);
    setCurrentPage(1);
    search(keyword);
    setHasSearched(true);
  }

  return (
    <div className="min-h-dvh bg-[#F0E7D5] text-[#212842] flex justify-center">
      <div
        id="app"
        className="flex flex-col items-center justify-center container max-w-2xl mx-auto font-geist px-4"
      >
        {/* Header */}
        <div className="pt-20 flex flex-col gap-2 items-center justify-center">
          <h1 className="text-6xl font-semibold tracking-tighter">
            Ambatupedia!
          </h1>
          <p className="text-[#212842] text-center text-base font-medium tracking-tighter">
            Switch to Ambatupedia. It’s private and free!
          </p>
        </div>

        {/* Sticky Search Form */}
        <div className="sticky top-6 z-10 py-4 w-full">
          <div className="relative flex flex-col items-center justify-center w-full">
            <form
              onSubmit={onSubmit}
              className={cn(
                'bg-[#F0E7D5] relative z-50 w-full mx-auto flex items-center justify-between border border-[#212842] h-12 rounded-full shadow-sm',
                showSuggestions
                  ? 'rounded-t-3xl rounded-b-none border-b-transparent shadow-none'
                  : 'rounded-full shadow-sm'
              )}
            >
              <div className="w-full flex items-center p-4">
                <Search size={16} />
                <input
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setHideSuggestions(false);
                  }}
                  className="ml-3 w-full outline-0 bg-transparent placeholder:text-gray-500"
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
                    'focus:outline-0 inline-flex items-center justify-center h-9 w-9 px-4 py-2 rounded-full transition-colors',
                    !keyword
                      ? 'bg-[#212842]/10 cursor-not-allowed'
                      : 'bg-[#212842]'
                  )}
                >
                  <span className="text-[#F0E7D5] inline-flex items-center justify-center p-0 m-0 w-6 h-6">
                    <ArrowUp size={16} />
                  </span>
                </button>
              </div>
            </form>

            {/* --- AUTO SUGGESTION DROPDOWN --- */}
            {showSuggestions && (
              <div className="absolute top-[41px] w-full z-55">
                <ul className="bg-[#F0E7D5] border border-[#212842] border-t-0 rounded-b-3xl shadow-lg list-none p-0 m-0 max-h-64 overflow-y-hidden -mt-1px">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={cn(
                        'px-4 py-3 cursor-pointer hover:bg-[#212842]/10 flex items-center gap-3 transition-colors',
                        index !== suggestions.length - 1 &&
                          'border-b border-[#212842]/10'
                      )}
                    >
                      <Search size={14} className="opacity-50" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                  {/* <div className="h-2"></div> */}
                </ul>
              </div>
            )}

            {/* --- LANGUAGE TOGGLE --- */}
            <div className="relative z-0 py-2 w-full flex justify-end gap-2 text-sm">
              <button
                onClick={() => setLanguage(Language.ID)}
                className={cn(
                  'cursor-pointer hover:underline decoration-[#212842]',
                  language === Language.ID && 'underline font-semibold'
                )}
              >
                Indonesia
              </button>
              <span className="opacity-50">|</span>
              <button
                onClick={() => setLanguage(Language.EN)}
                className={cn(
                  'cursor-pointer hover:underline decoration-[#212842]',
                  language === Language.EN && 'underline font-semibold'
                )}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {Anything && <Anything />}
        <div className="w-full mt-4 pb-8 grid grid-cols-1 gap-2">
          {!hasSearched ? null : data.length >= 1 ? (
            data.map(
              ({ keyword_id, keyword_en, definition_id, definition_en }) => {
                return (
                  <div
                    key={language === Language.ID ? keyword_id : keyword_en}
                    className="border border-[#212842] hover:bg-[#212842] hover:text-[#F0E7D5]  rounded-md transition-all"
                  >
                    <div className="flex flex-col py-6 px-4 gap-2">
                      <div className="flex flex-col gap-0.5">
                        <h1 className="capitalize font-bold tracking-tighter text-3xl">
                          {language === Language.ID ? keyword_id : keyword_en}
                        </h1>
                        <h2 className="text-base capitalize font-normal">
                          {language === Language.EN ? keyword_id : keyword_en}
                        </h2>
                      </div>
                      <p className="text-base/8 text-justify">
                        {language === Language.ID
                          ? definition_id
                          : definition_en}
                      </p>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <p className="text-[#212842] text-center text-xl font-medium tracking-tighter">
              Data tidak ditemukan
            </p>
            // <div className="w-full bg-[#212842] border border-[#F0E7D5] rounded-md h-18 flex items-center justify-center">
            // </div>
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
