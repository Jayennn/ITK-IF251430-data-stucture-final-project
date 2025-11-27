import { useEffect, useState } from 'react';

export function Naruto() {
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (!run) return;

    const timer = setTimeout(() => setRun(false), 2000);
    return () => clearTimeout(timer);
  }, [run]);

  if (!run) {
    return (
      <button
        onClick={() => setRun(true)}
        className="cursor-pointer fixed bottom-5 z-50 bg-[#FF9408] rounded-full w-20 h-20 flex items-center justify-center shadow-lg animate-slide-up"
      >
        <img src="/naruto.png" className="w-12 h-12" />
      </button>
    );
  }

  return (
    <img
      src="/naruto_run.gif"
      className="fixed bottom-10 left-0 z-50 w-72 h-72 animate-naruto-run pointer-events-none"
    />
  );
}
