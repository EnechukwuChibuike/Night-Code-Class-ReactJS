import { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <section className="h-screen grid justify-items-center content-center gap-5">
      <h1 className="text-5xl">
        {toggle ? "Click The Button Below!" : "You Have Clicked Me"}
      </h1>

      <button className="p-2 bg-slate-600 text-white" onClick={handleToggle}>
        Click Me!
      </button>
    </section>
  );
}

export default Toggle;
