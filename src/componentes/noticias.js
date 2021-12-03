import React from "react";
import * as style from "../componentes/noticias.module.css";
import imgNoticia from "../images/noti.jpg";
const noticias = () => {
  return (
    <div className={style.container}>
      <div className={style.containerCenter}>
        <img className={style.img} src={imgNoticia}></img>
        <div className={style.barra}>
          <h1 className={style.titulo}>Ungimiento Ana Tersesa</h1>
        </div>
      </div>
    </div>
  );
};
export default noticias;
