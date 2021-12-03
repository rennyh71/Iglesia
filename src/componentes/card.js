import React from "react";
import * as style from "../componentes/card.module.css";
import imgCard from "../images/imgCard.jpg";

class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
      display: "flex",
      flexDirection: "columm",
      backgroundColor: "blanchedalmond",
      boxShadow: "3px 3px 3px rgb(0, 0, 0, 0.5 )",
    };
  }
  componentDidMount() {
    if (this.props.reverse) {
      this.setState({
        flexDirection: "row-reverse",
      });
    }
  }

  render() {
    return (
      <div style={this.state}>
        <div className={style.cardImg}>
          <img className={style.imagen} alt="ALT" src={imgCard}></img>
        </div>
        <div className={style.cardContent}>
          <h1> PACTO EN FAMILIA </h1>
          <h3> APARTIR DE</h3>
          <h4> 28/11/2021 </h4>
        </div>
      </div>
    );
  }
}

export default card;
