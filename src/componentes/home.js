import React from "react";
import * as style from "../componentes/home.module.css";
import Card from "../componentes/card";
import Noticias from "../componentes/noticias";
import { Link } from "gatsby";
import Nav from "../componentes/nav";
export default class home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Nav />
        </header>
        <div className={style.portada}></div>
        <main className={style.contenido}>
          <Noticias />
        </main>
        <aside className={style.sidebar}>sidebar</aside>
        <section className={style.videos}>
          <iframe
            width="100%"
            height="345"
            src="https://www.youtube.com/watch?v=iNFxxQgFo5I"
          ></iframe>
        </section>
        <section className={style.contentCard}>
          <Card />
          <Card reverse={true} />
          <Card />
          <Card reverse={true} />
        </section>
        <footer className={style.footer}> pie de pagina </footer>
      </div>
    );
  }
}
