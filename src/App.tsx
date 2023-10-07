import "./App.css";
import Darkmode from "./components/Darkmode";
import customStyles, { icons } from "./components/customStyles";

function App() {
  return (
    <div className="App">
      <div className="darkmode-container">
        <Darkmode switchStyles={customStyles} icons={icons}/>
      </div>
      <h1 style={{ textAlign: "center" }}>Test Dark Mode ...</h1>
    </div>
  );
}

export default App;
