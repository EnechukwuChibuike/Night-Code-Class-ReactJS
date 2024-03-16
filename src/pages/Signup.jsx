import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("loading...");
    setTimeout(() => {
      navigate("/");
      setLoading("Submit");
    }, 3000);
  };
  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 h-[90vh] grid gap-5 justify-items-center content-center shadow-md"
      >
        <h1 className="text-4xl">Sign Up </h1>
        <input
          className="input"
          type="text"
          placeholder="Enter name..."
          required
        />
        <input
          className="input"
          type="email"
          placeholder="Enter email..."
          required
        />

        <input
          className="input"
          type="number"
          placeholder="Enter Phone No..."
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Enter password..."
          required
        />
        <input
          className="input"
          type="password"
          placeholder="confirm password..."
          required
        />
        <input
          type="submit"
          className="input bg-black text-white hover:opacity-85 disabled:opacity-70"
          value={loading}
          disabled={loading === "loading..."}
        />
      </form>
    </main>
  );
}

export default Signup;
