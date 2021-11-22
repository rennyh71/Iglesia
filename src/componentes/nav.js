import React from "react";
import * as style from "../componentes/nav.module.css";
const nav = () => {
  return (
    <div className={style.navbar}>
      <a href="#default" className={style.logo}>
        Refugio
      </a>
      <div className={style.navbar_right}>
        <a className={style.active} href="#home">
          Home
        </a>
        <a href="#about">Predicas</a>
        <a href="#contact">Instituo Biblico</a>
        <a href="#about">Jovenes</a>
        <a href="#about">Acerca De Nosotros</a>
      </div>
    </div>
  );
};

export default nav;
