import React from "react";


import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.horns}Gallery of Horns{this.props.horns}</h1>
      </header>
    );


  }
}

export default Header;
