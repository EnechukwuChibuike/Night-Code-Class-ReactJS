import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const increment = () => {
      setCounter((prev) => prev + 1);
    };

    let interval = setInterval(increment, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-screen justify-center items-center">
      <h1 className="text-5xl">{counter}</h1>
    </section>
  );
}

export default Counter;
