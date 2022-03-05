import React from "react";
import * as style from "../componentes/home.module.css";
import Card from "../componentes/card";
import Noticias from "../componentes/noticias";
import Nav from "../componentes/nav";
import anuncios from "../images/anuncios.png";
import info3 from "../images/info3.jpg";
import plan from "../images/plan.png";
export default class home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Nav />
        </header>

        <div className={style.portada}></div>

        <div className={style.fondo}>
          <div className={style.opacidad}>
            <section className={style.videos}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/T6CKM-uH7wE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
            <section className={style.tresColum}>
              <div className={style.anuncios}>
                <img src={anuncios}></img>
              </div>
              <div className={style.infografia}>
                <img src={info3}></img>
              </div>
              <div className={style.plan}>
                <img src={plan}></img>
              </div>
            </section>
            <main className={style.contenido}>{<Noticias />}</main>

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
      </div>
    );
  }
}
