import "./App.css";
import Button from "./Button";
import Header from "./Header";
import List from "./List";

function App({ list }) {
  const getStarted = () => {
    console.log("Get Started");
  };

  list = ["Benz", "Ferari", "Lexus", "Venza"];

  return (
    <main>
      <Header />
      <section>
        <h1>Welcome To My Website</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatibus adipisci quaerat error, atque quod sapiente deleniti
          sequi assumenda! A recusandae eligendi dolorum nulla voluptatem nobis
          illo dolores quibusdam amet?
        </h3>
        <Button text={"Get Started"} handleClick={getStarted} />
      </section>

      <ol>
        {list.map((li) => (
          <List list={li} />
        ))}
      </ol>
    </main>
  );
}

// JSX - Javascript XML

export default App;
