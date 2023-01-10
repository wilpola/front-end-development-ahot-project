import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <h1>Front-end Development course ahot Project </h1>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </div>
    </Router>
  );
}

export default App;
