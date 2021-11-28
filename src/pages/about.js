import React from "react";
import Nav from "../componentes/nav";
import * as style from "../pages/about.module.css";
const about = () => {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.noti}>
        <h1>Un Refugio Social</h1>
        <h2>Llevando palabra de vida y esperanza </h2>
        <p>
          Así alumbre vuestra luz delante de los hombres, para que vean vuestras
          buenas obras y glorifiquen vuestro Padre que está en los cielos. Mateo
          5; I6{" "}
        </p>
        <img src="https://source.unsplash.com/random" alt="i"></img>
        <label>
          Brindar un mano amiga en este tiempo para muchos es complicado si se
          hace solo, pero cundo se forma un equipo las posibilidades son
          infinitas y más sin son respaldadas por Dios La célula del sector
          Guiparo junto con la iglesia son los encargados de regalar una palabra
          de aliento y sonrisa a los niños del campito. Entrega de comidas,
          obras de teatro, cortes de cabellos para niños y peinados para niñas,
          son de las tantas actividades que realizan bendiciendo a más de 60
          personas entre niños y adultos, mostrando el amor por el prójimo y el
          amor insuperable de Dios por ellos.
        </label>
      </div>
    </div>
  );
};
export default about;
