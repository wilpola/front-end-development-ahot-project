// This file contains the About page

// import images
import BannerImage from "../../assets/images/1.jpg";

// import styles
import "./about.scss";

const About = () => {
  // Rendered content
  return (
    <div id={"About"}>
      <div className="image-container">
        <img className="image" src={BannerImage} alt="Turku University" />
      </div>
      <div className="post-container">
        {/* Beginning of the post */}
        <h1>About Front-end AhotProject</h1>

        <h3>Purpose</h3>
        <p>
          {" "}
          The purpose of this project is to showcase my prior knowledge with
          JavaScript, and React.js in a way that I will be able to ahot the
          course(pass without attending lectures). I have created a simple
          static website, that shows the use of React hooks, and functional
          components. I have opted to create a mock loader to the site as well,
          to show case the use of the useEffect() hook.
        </p>

        <p>
          {" "}
          With this in mind, the design of the site is not the main focus,
          though I have used some of the things I've learned over the years to
          make the site look a little more modern. One main focus I had while
          building this site is content flow, and legeability.
        </p>

        <br />

        <h3> Technologies</h3>
        <p>
          The main Technologies used in this static site is{" "}
          <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
            {" "}
            React.js{" "}
          </a>
          and{" "}
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            SCSS
          </a>
          . The site also uses a few different pre-existing react-libraries to
          show case understanding on, how to use libraries with own projects.
          Most notably I chose to use{" "}
          <a
            href="https://reactrouter.com/en/main"
            target={"_blank"}
            rel="noreferrer"
          >
            react-router-dom
          </a>{" "}
          to handle site navigation. To enable the use of SCSS in a{" "}
          <a
            href="https://create-react-app.dev/"
            target={"_blank"}
            rel="noreferrer"
          >
            create-react-app (CRA)
          </a>{" "}
          -project, I used npm to also install{" "}
          <a
            href="https://www.npmjs.com/package/node-sass"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            node-sass
          </a>{" "}
          package. It may be obvious, but I am also using{" "}
          <a href="https://github.com/" target={"_blank"} rel="noreferrer">
            Git
          </a>{" "}
          vcs to ensure good development practices.
        </p>

        <h3> Design thoughts</h3>
        <p> The page is build mainly with grid, and flex layouts, which allows flexible component placements, and a chance to build a more responsive site. Responsiveness is not at the forefront, but some work with regards to this has been done, to ensure legeability. I personally like minimalistic designs, and on this site one can see ample use of white space, and simple colors.</p>
      </div>
    </div>
  );
};

// export about page
export default About;
