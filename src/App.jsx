import { useState } from "react";
import "./App.css";
import Form from "./Form";

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
    </main>
  );
}

export default App;
