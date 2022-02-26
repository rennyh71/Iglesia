import React from "react";
import * as style from "../componentes/nav.module.css";
import { Link } from "gatsby";
import { AiFillHome } from "react-icons/ai";
const nav = () => {
  return (
    <div className={style.navbar}>
      <div className={style.inicio}>
        <h1>
          <a>
            <AiFillHome />
          </a>
        </h1>
      </div>
      <div className={style.navbar_in}>
        <Link
          className={style.link}
          to="https://www.youtube.com/"
          target="_blank"
        >
          Anucios
        </Link>

        <Link
          className={style.link}
          to="https://www.facebook.com/jov.movim"
          target="_blank"
        >
          Jovenes
        </Link>

        <Link
          className={style.link}
          to="https://www.instagram.com/esperanzaenjesucristo.ve/"
          target="_blank"
        >
          Accion Social
        </Link>

        <Link
          className={style.link}
          to="https://app.box.com/v/ClasesdeDoctrinaRefugio"
          target="_blank"
        >
          Clases de Doctrina
        </Link>

        <Link
          className={style.link}
          to="https://www.facebook.com/CASADEORACIONRJGUAYANA"
          target="_blank"
        >
          Quienes Somos
        </Link>
      </div>
    </div>
  );
};

export default nav;
