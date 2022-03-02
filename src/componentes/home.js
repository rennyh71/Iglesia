import React from "react";
import * as style from "../componentes/home.module.css";
import Card from "../componentes/card";
import Noticias from "../componentes/noticias";
import Nav from "../componentes/nav";

export default class home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Nav />
        </header>
        <div className={style.portada}></div>
        <main className={style.contenido}>{}</main>
        <div className={style.fondo}>
          <section className={style.videos}>
            <h1>Presentacion</h1>
          </section>
          <section className={style.contentCard}>
            <Card />
            <Card reverse={true} />
          </section>
          <footer className={style.footer}>
            <div className={style.footerDiv}>
              <a href="">HELLO@HELLOCREATIVIDAD.COM</a>
              <a href="">Cookies</a>
              <a href="">Política de privacidad</a>
              <a href="">Aviso legal</a>
            </div>
            <div className={style.footerDiv}>
              <a href="">SÍGUENOS EN</a>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
            </div>
            <div className={style.footerDiv}>
              <a href="">HELLO CREATIVIDAD ES UNA MARCA REGISTRADA © 2021.</a>
              <a href="">hellocreatividad.com</a>
              <a href="">Diseño y desarrollo por Blavet</a>
            </div>
            <div className={style.footerDiv}>
              <a href="">GRACIAS POR SU VISITA. ¡HASTA PRONTO!</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
