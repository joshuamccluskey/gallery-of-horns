import React from "react";
import Card from 'react-bootstrap/Card';
import HornedBeast from "./HornedBeast.js";


import "./Main.css";

class Main extends React.Component {
  render() {

    let beastMap = this.props.data.map((beast, index) => (
      <HornedBeast
        key={"Beast: " + index}
        name={beast.title}
        imageUrl={beast.image_url}
        words={beast.description}
      />



    ));



    return (
      <main>
        {beastMap}
      </main>
    )
  }
}

export default Main;
