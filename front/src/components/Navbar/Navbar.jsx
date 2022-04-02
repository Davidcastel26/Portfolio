import React from "react";

// styles

import { HiMenuAlt4, Hix} from 'react-icons/hi'
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo here" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills", "testimonials"].map(
          (item) => (
            <li className="app_flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">

      </div>
    </nav>
  );
};

export default Navbar;
