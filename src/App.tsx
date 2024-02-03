import { useState } from "react";
import "./App.css";
import Darkmode from "./components/Darkmode";
import { SwitchStyles } from "./types";

function App() {
  const [state, setState] = useState("");
  const id = (e: string) => {
    setState(e);
  };
  const styles: SwitchStyles = [
    {
      theme: "Light",
      variables: ["--main-background", "--main-color"],
      values: ["white", "black"],
    },
    {
      theme: "Dark",
      variables: ["--main-background", "--main-color"],
      values: ["black", "white"],
    },
  ];
  return (
    <div className="App">
      <Darkmode isDark={id} icons switchStyles={styles} />
      <h1>DarkMode working on it ...</h1>
      <h2>
        my theme is{" "}
        <i style={{ color: state === "Dark" ? "blue" : "orange" }}>{state}</i>
      </h2>
    </div>
  );
}

export default App;
