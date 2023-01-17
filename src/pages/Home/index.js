// This file contains the Home -page

// import libraries
import { VscArrowSmallRight } from "react-icons/vsc";

// import components
import { Counter, ShoppingList, SignIn } from "../../components";

// import styles
import "./home.scss";

//import Images
import BannerImage from "../../assets/images/bannerImage.svg";
import Git from "../../assets/images/git.png";
import RRD from "../../assets/images/rrd.webp";
import SASS from "../../assets/images/sass.png";
import ReactIcon from "../../assets/images/react.png";

// code for the Home -page
const Home = () => {

    
// Scroll to id
    const scrollToView = () => {
        let x = document.getElementById('example');
        x.scrollIntoView();
    }

  return (
    <div id={"Home"}>
      <section id="banner">
        <div className="banner-text">
          <h1>Showcase website to display knowledge in js and React</h1>
          <p>
            {" "}
            On this site one will find some use of hooks, and more to showcase
            prior knowledge on web-development especially with the more
            functional side.
          </p>
          <button onClick={() => scrollToView()}>
            Show examples{" "}
            <span className="hover-arrow">
              <VscArrowSmallRight size={30} className="arrow" color="white" />
            </span>
          </button>
        </div>
        <div className="banner-illustration">
          <img src={BannerImage} alt="Web illustration" />
        </div>
      </section>
      <h2 id="Techno">Technologies</h2>
      <section id="Build-with">
        <img src={ReactIcon} alt="react" />
        <img src={SASS} alt="sass" />
        <img src={Git} alt="Git" />
        <img src={RRD} alt="react-router-dom" />
      </section>
      <h2 className="example-header">Examples</h2>
      <section id="examples">
        <div className="example-item counter-container">
          <div className="info">
            <h3>Counter</h3>
            <p>
              This is a basic counter component that mutates the state on
              negative and positive button clicks.{" "}
            </p>
          </div>
          <Counter />
        </div>
        <div className="example-item counter-container">
          <div className="info">
            <h3>Counter</h3>
            <p>
              This is a simple demo of altering react state arrays. In this demo
              we map the array, and push new elements to the
              end of the array.
            </p>
            <p>Here we are using React's internal hook `useState()` to get the input field's text, and resetting after adding an element to the list.</p>
          </div>
          <ShoppingList />
        </div>
        <div className="example-item signin-form">
            <h3>Sign in Form</h3>
            <p>This is a mock sign in form, that will send the filled out data to the console to be viewed as JSON data. The form data will be stored to the state, and then reset on page load and form submission.</p>
        </div>
        <SignIn />
      </section>
    </div>
  );
};

// exports the page
export default Home;
