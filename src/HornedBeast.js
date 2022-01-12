import React from "react";


import "./HornedBeast.css";

class HornedBeast extends React.Component {

  //constructor to set up a state

  constructor(props) {
    super(props);
    this.state = {
      faves: 0
    }
  }

  handleFaves = () => {
    this.setState({
      faves: this.state.faves + 1
    })
  }


  render() {
    return (
      



      <article>
        <h2>{this.props.name}</h2>
        <p>❤️ : {this.state.faves} </p>
        <img
          onClick={this.handleFaves}
          src={this.props.imageUrl}
          alt={this.props.name}
          title={this.props.name} />
        <p>{this.props.words}</p>
      </article>
    )
  }
}
export default HornedBeast;
