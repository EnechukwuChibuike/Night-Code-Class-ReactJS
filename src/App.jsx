import "./App.css";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import StickyHeader from "./components/StickyHeader";

function App() {
  return (
    <main>
      <StickyHeader />
      <Counter />
      <FetchData />
    </main>
  );
}

export default App;
