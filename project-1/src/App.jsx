import { useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navigation />
      </div>
    </>
  );
}

export default App;
