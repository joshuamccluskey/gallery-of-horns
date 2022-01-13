import React from "react";


import HornedBeast from "./HornedBeast.js";


import "./Main.css";

class Main extends React.Component {
  render() {

    console.log(this.props)


    let beastMap = this.props.data.map((beast, index) => (
      <HornedBeast
        key={"Beast: " + index}
        addHorns={this.props.addHorns}
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
