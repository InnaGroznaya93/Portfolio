import React from "react";
import style from "./Nav.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";


function Nav() {

  return (
    <div className={style.nav}>
      <Link to="main" smooth={true} duration={500} activeClass={style.active}>Main</Link>
      <Link to="skills" smooth={true} duration={500} activeClass={style.active}>Skills</Link>
      <Link to="projects" smooth={true} duration={500} activeClass={style.active}>Projects</Link>
      <Link to="contacts" smooth={true} duration={500} activeClass={style.active}>Contacts</Link>
    </div>
  );
}

export default Nav;
