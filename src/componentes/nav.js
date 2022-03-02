import React from "react";
import * as style from "../componentes/nav.module.css";
import { Link } from "gatsby";
import { AiFillHome } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import { FaHandsHelping, FaChild } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
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
          Anuncios
        </Link>
        <Link
          className={style.link}
          to="https://www.facebook.com/jov.movim"
          target="_blank"
        >
          <FaChild />
          Jovenes
        </Link>
        <Link
          className={style.link}
          to="https://www.instagram.com/esperanzaenjesucristo.ve/"
          target="_blank"
        >
          <FaHandsHelping />
          Accion Social
        </Link>
        <Link
          className={style.link}
          to="https://app.box.com/v/ClasesdeDoctrinaRefugio"
          target="_blank"
        >
          <BsBook />
          Clases de Doctrina
        </Link>
        <Link
          className={style.link}
          to="https://www.facebook.com/CASADEORACIONRJGUAYANA"
          target="_blank"
        >
          <IoMdInformationCircle />
          Quienes Somos
        </Link>

        <Link
          className={style.link}
          to="https://www.google.com/maps/place/Casa+de+Oraci%C3%B3n+Refugio+de+Jehov%C3%A1/@8.3476883,-62.6882569,17z/data=!3m1!4b1!4m5!3m4!1s0x8dcbf062de7b3cdb:0x4e9185a4ad725ff!8m2!3d8.3476954!4d-62.6860723"
          target="_blank"
        >
          <SiGooglemaps />
          ubicacion
        </Link>
      </div>
    </div>
  );
};

export default nav;
