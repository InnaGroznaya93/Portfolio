import React, { useState } from "react";
import style from "./burgerNav.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function BurgerNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={style.burgerNav}>
      <div
        className={
          isOpenMenu
            ? `${style.burgerNavItems} ${style.show}`
            : style.burgerNavItems
        }
      >
        <Link to="main" smooth={true} duration={500} activeClass={style.active}>
          Main
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          activeClass={style.active}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          activeClass={style.active}
        >
          Projects
        </Link>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          activeClass={style.active}
        >
          Contacts
        </Link>
      </div>
      <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
        <div className={style.burgerLine}></div>
        <div className={style.burgerLine}></div>
        <div className={style.burgerLine}></div>
      </div>
    </div>
  );
}

export default BurgerNav;
