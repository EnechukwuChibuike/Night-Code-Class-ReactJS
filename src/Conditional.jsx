import { useState } from "react";

function Conditional() {
  const [name, setName] = useState();
  const [displayName, setDisplayName] = useState();

  const handleSubmit = () => {
    setDisplayName(name);

    setName("");
  };

  return (
    <section className="h-screen grid justify-items-center content-center gap-5">
      {displayName && <h1 className="text-5xl">Hello {displayName}</h1>}
      {!displayName && <h1 className="text-5xl">What's Your Name?</h1>}
      {/* {displayName ? (
        <h1 className="text-5xl">Hello {displayName}</h1>
      ) : (
        <h1 className="text-5xl">What's Your Name?</h1>
      )} */}

      <input
        type="text"
        className="border-slate-300 border-[1px]"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button className="bg-slate-500 p-2" onClick={handleSubmit}>
        submit
      </button>
    </section>
  );
}

export default Conditional;
