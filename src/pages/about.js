import React from "react";
import Nav from "../componentes/nav";
import * as style from "../pages/about.module.css";
const about = () => {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.noti}>
        <h1>Vision</h1>
        <hr />
        <p>
          Yo los traeré a mi santo monte, y los alegraré en mi casa de oración.
          Sus holocaustos y sus sacrificios serán aceptos sobre mi altar; porque
          mi casa será llamada casa de oración para todos los pueblos.
        </p>
        <hr />
        <h2>
          Ser una Iglesia de Oración e Intercesión, que de cobertura en amor, a
          las familias, comunidades y ciudades de las naciones, a través del
          trabajo de un equipo legislador, que brinde un espacio de Refugio,
          para la restauración del afligido, dejando libre al oprimido,
          rompiendo los yugos y guiando a la luz de Cristo a todo aquel que no
          le conoce, para ser presentados en el gozo del Señor como ofrenda
          acepta en el Amado.
        </h2>
      </div>
    </div>
  );
};
export default about;
