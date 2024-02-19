import { useState } from "react";

function Update() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <section className="h-screen grid justify-items-center content-center gap-5">
      <h1 className="text-5xl">{count}</h1>
      <section className="flex gap-3">
        <button onClick={decrement} className="px-5 py-3 text-2xl bg-slate-500">
          -
        </button>
        <button onClick={increment} className="px-5 py-3 text-2xl bg-slate-500">
          +
        </button>
      </section>
    </section>
  );
}

export default Update;
