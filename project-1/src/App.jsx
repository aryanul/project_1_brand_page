import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navigation />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
