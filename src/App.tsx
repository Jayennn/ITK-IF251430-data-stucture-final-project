import { ArrowUp, Search } from 'lucide-react';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container max-w-3xl mx-auto font-geist text-zinc-800">
        {/* FORM */}
        <div className="flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="text-4xl font-semibold tracking-tighter">
              Ambatupedia!
            </div>
            <form className="w-full max-w-xl mt-4 flex items-center justify-between border h-12 rounded-full">
              <div className="w-full flex items-center p-4">
                <Search size={16} />
                <input
                  className="ml-2 w-full outline-0"
                  type="text"
                  placeholder="e.g Pesawat F106"
                />
              </div>
              <div className="px-1.5">
                <button className="inline-flex items-center justify-center h-9 w-9 px-4 py-2 bg-zinc-200  rounded-full">
                  <span className="inline-flex items-center justify-center p-0 m-0 w-6 h-6">
                    <ArrowUp size={14} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FORM RESULTS */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-1 gap-2">
          {Array.from([1, 2, 3, 4]).map((i) => {
            return (
              <div
                key={i}
                className="w-fit shadow border border-zinc-500 rounded-md"
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
      </div>
    </div>
  );
}

export default App;
