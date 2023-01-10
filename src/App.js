import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import { Navigation } from "./components";

// import pages
import { Home, About } from "./pages";

// import styles
import "./App.scss";

function App() {
  return (
    // Router to handle different pages
    <Router>
      <div className="App">

        {/* Navigation component */}
        <Navigation />

        {/* Different page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
