import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Update from "./Update";
import Toggle from "./Toggle";
import Conditional from "./Conditional";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setName(text);

    setText("");
  };

  return (
    <main>
      <h1>Hello {name}</h1>
      <Form handleChange={handleChange} text={text} handleClick={handleClick} />

      <Update />

      <Toggle />

      <Conditional />
    </main>
  );
}

export default App;
