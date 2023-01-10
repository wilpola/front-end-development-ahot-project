import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircleSpinner } from "react-spinners-kit";

// import components
import { Navigation } from "./components";

// import pages
import { Home, About } from "./pages";

// import styles
import "./App.scss";

function App() {

  // Create loader state
  const [loader, toggleLoader] = useState(true);

  // Mock Loader -> on page load
  useEffect(() => {
    
    // test if first load on the site
    if (loader) {

      // set 2 second mock loading animation
      setTimeout(() => {

        // remove loader, save to state it ran
        toggleLoader(false);
      }, 2000);
    }
  }, [loader]);

  return (
    // Router to handle different pages
    <Router>

      {/* If first load -> run mock loader */}
      {loader ? (
        <div className="loader">
          <CircleSpinner size={30} color="#686769" loading={loader} />
          <p>Loading</p>
        </div>
      ) : (

        // otherwise show app
        <div className="App">
          {/* Navigation component */}
          <Navigation />

          {/* Different page routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
