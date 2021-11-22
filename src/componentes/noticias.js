import { Link } from "gatsby";
import React from "react";
import * as style from "../componentes/noticias.module.css";
const noticias = () => {
  return (
    <div className={style.container}>
      <div className={style.containerCenter}>
        <img
          className={style.img}
          src="https://source.unsplash.com/random"
        ></img>
        <h1 className={style.titulo}>
          <a>Titulo</a>
        </h1>
        <h3 className={style.h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          viverra auctor massa, ut vulputate nisl venenatis et. Pellentesque
          eget sem posuere, placerat nibh sed, eleifend mi. Mauris at tincidunt
          odio.
        </h3>
      </div>
    </div>
  );
};
export default noticias;
