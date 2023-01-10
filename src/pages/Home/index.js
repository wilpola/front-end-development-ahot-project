// This file contains the Home -page

// import libraries
import { VscArrowSmallRight } from "react-icons/vsc";

// import components
import { Counter } from "../../components";

// import styles
import "./home.scss";

//import Images
import BannerImage from "../../assets/images/bannerImage.svg";
import Git from '../../assets/images/git.png';
import RRD from '../../assets/images/rrd.webp';
import SASS from '../../assets/images/sass.png';
import ReactIcon from '../../assets/images/react.png';


// code for the Home -page
const Home = () => {
  return (
    <div id={"Home"}>
      <section id="banner">
        <div className="banner-text">
          <h1>Showcase website to display knowledge in js and React</h1>
          <p> On this site one will find some use of hooks, and more to showcase prior knowledge on web-development especially with the more functional side.</p>
          <button>Show examples <span className="hover-arrow"><VscArrowSmallRight size={30} className="arrow" color="white"/></span></button>
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
      <h2>Examples</h2>
      <section id='examples'>
        <Counter />
      </section>
    </div>
  );
};

// exports the page
export default Home;
