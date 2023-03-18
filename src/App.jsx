import "./App.scss";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainSection">
        <Home />
      </div>
    </div>
  );
}

export default App;
