import { useState } from 'react';

export function Calculator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  function handleClick(value: string) {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (e: unknown) {
        console.log(e);

        setResult(`Math Error`);
        setInput('');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  }

  return (
    <div className="border border-[#212842] w-full h-full max-h-80 rounded-md">
      <input
        type="text"
        value={input}
        disabled={true}
        className="border-b text-right focus:outline-0 text-2xl placeholder:text-[#212842] w-full h-full max-h-16 px-4"
      />

      {/*  */}
      <div className="p-4 flex gap-2">
        <div className="grid grid-cols-4 w-full max-w-52 gap-2 justify-center">
          {['7', '8', '9', '/'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleClick(item)}
              className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
            >
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleClick(item)}
              className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
            >
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleClick(item)}
              className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleClick('0')}
            className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleClick('+')}
            className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => handleClick('=')}
            className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
          >
            =
          </button>
          <button
            type="button"
            onClick={() => handleClick('Clear')}
            className="text-2xl w-12 h-12 inline-flex items-center justify-center border border-[#212842] rounded"
          >
            C
          </button>
        </div>
        <div className="font-medium w-full flex items-center justify-center text-7xl">
          {result}
        </div>
      </div>
    </div>
  );
}
