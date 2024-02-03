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
      <Darkmode switchMode="static" hover icons isDark={id} />
      <h1>DarkMode working on it ...</h1>
      <h2>my theme is {state}</h2>
    </div>
  );
}

export default App;
