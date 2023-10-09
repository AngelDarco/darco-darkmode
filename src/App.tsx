import "./App.css";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <div className="App">
      <div className="darkmode-container">
        <Darkmode icons />
      </div>
      <h1 style={{ textAlign: "center" }}>Test Dark Mode ...</h1>
    </div>
  );
}

export default App;
