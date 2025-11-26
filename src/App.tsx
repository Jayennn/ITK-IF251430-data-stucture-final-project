import { ArrowUp, Search } from 'lucide-react';
import { usePagination } from './hooks/usePagination';

function App() {
  // const {} = usePagination()
  return (
    <div className="flex items-center justify-center bg-[#F0E7D5] text-[#212842]">
      <div className="container max-w-3xl mx-auto font-geist">
        <div className="mt-100 flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="text-4xl font-semibold tracking-tighter">
              Ambatupedia!
            </div>
            <div className="absolute h-screen pt-10 w-full flex justify-center">
              <form className="bg-[#F0E7D5] z-10 sticky top-6 w-full max-w-xl mt-4 flex items-center justify-between border h-12 rounded-full">
                <div className="w-full flex items-center p-4">
                  <Search size={16} />
                  <input
                    className="ml-3 w-full outline-0 "
                    type="text"
                    placeholder="e.g Pesawat"
                  />
                </div>
                <div className="px-1.5">
                  <button className="inline-flex items-center justify-center h-9 w-9 px-4 py-2 bg-[#212842] rounded-full">
                    <span className="text-[#F0E7D5] inline-flex items-center justify-center p-0 m-0 w-6 h-6">
                      <ArrowUp size={16} />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FORM RESULTS */}
        <div className="mt-24 h-full grid grid-cols-1 gap-2">
          {Array.from({ length: 5 }).map((index) => {
            return (
              <div
                key={index}
                className="w-fit border border-[#212842] rounded-md"
              >
                <div className="flex flex-col py-6 px-4 gap-2">
                  <h2 className="font-bold tracking-tighter text-3xl">
                    Pesawat
                  </h2>
                  <p className="text-base/8 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi voluptas ullam dolorem inventore libero sapiente
                    vero repudiandae minus, laudantium quia! Voluptates mollitia
                    hic omnis obcaecati itaque cum eveniet dolores ad!
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="my-4 flex items-center justify-between">
          Page: 1
          <div className="flex gap-2">
            <button className="border w-8 h-8">1</button>
            <button className="border w-8 h-8">2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
