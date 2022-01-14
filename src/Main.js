import React from "react";


import HornedBeast from "./HornedBeast.js";


import "./Main.css";

class Main extends React.Component {
  render() {

    console.log(this.props)


    let beastMap = this.props.data.map((beast, index) => (
      <HornedBeast
        key={"Beast: " + index}
        beast={beast}
        name={beast.title}
        description={beast.description}
        imgUrl={beast.image_url}
        handleShow={this.props.handleShow}
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
