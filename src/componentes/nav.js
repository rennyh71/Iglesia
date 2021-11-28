import React from "react";
import * as style from "../componentes/nav.module.css";
import { Link } from "gatsby";
const nav = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_in}>
        <Link className={style.link} to="/index">
          Home
        </Link>
        <Link className={style.link} to="/index">
          Predicaciones
        </Link>
        <Link className={style.link} to="/about">
          Jovenes
        </Link>
        <Link className={style.link} to="/about">
          Acerca De Nosotros
        </Link>
      </div>
    </div>
  );
};

export default nav;
