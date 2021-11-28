import { Link } from "gatsby";
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
          <h2 className={style.h3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            viverra auctor massa, ut vulputate nisl venenatis et. Pellentesque
            eget sem posuere, placerat nibh sed, eleifend mi. Mauris at
            tincidunt odio.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default noticias;
