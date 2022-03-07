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
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UL8zX6TLGSc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={style.plan}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Ye6xxnxWlQ0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </section>
            <main className={style.contenido}>{<Noticias />}</main>

            <section className={style.contentCard}></section>
            <footer className={style.footer}>
              <div className={style.footerDiv}></div>
              <div className={style.footerDiv}></div>
              <div className={style.footerDiv}></div>
              <div className={style.footerDiv}></div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
