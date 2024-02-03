import { useState } from "react";
import "./App.css";
import Darkmode from "./components/Darkmode";

function App() {
  const [state, setState] = useState("");
  const id = (e: string) => {
    setState(e);
  };

  return (
    <div className="App">
      <Darkmode isDark={id} icons />
      <h1>DarkMode working on it ...</h1>
      <h2>
        my theme is{" "}
        <i style={{ color: state === "Dark" ? "blue" : "orange" }}>{state}</i>
      </h2>
    </div>
  );
}

export default App;
