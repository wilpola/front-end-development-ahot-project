// Navigation component

// Import link component 
import { NavLink as Link } from "react-router-dom";

// import styles
import './nav.scss';

const Navigation = () => {

    return (
        <div id={'Navigation'} className={'navigation-container'}>
            <div className={"nav-inner-container"}>

            <div className={"nav-logo"}>
                <h3>AhotProject</h3>
            </div>

            <div className={"nav-links"}>
                <Link end to="/">Home</Link>
                <Link end to="/about">About</Link>
            </div>
            </div>

        </div>
    )
};

export default Navigation;