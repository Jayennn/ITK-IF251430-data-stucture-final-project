function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container mx-auto font-geist text-zinc-800">
        {/* FORM */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="text-5xl font-semibold tracking-tighter">
              Masukkan Kata Kunci!
            </div>
            <form className="mt-6 flex flex-row items-center justify-between gap-4">
              <input
                className="w-full text-lg font-medium border border-zinc-400 h-12 p-4 rounded-lg"
                type="text"
                placeholder="e.g Pesawat F106"
              />
              <button className="text-lg font-medium flex items-center justify-center bg-zinc-800 text-zinc-100 h-12 p-4 rounded-md">
                Cari!
              </button>
            </form>
          </div>
        </div>

        {/* FORM RESULTS */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-3 gap-2">
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
