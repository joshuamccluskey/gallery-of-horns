import React from "react";
import Card from 'react-bootstrap/Card';

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
      <Card style={{width: '30%'}}>
        <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>❤️ : {this.state.faves}</Card.Text>
        <Card.Img onClick={this.handleFaves}
          src={this.props.imageUrl}
          alt={this.props.name}
          title={this.props.name}/>
        <Card.Text>{this.props.words}</Card.Text>
        </Card.Body> 

      </Card>
      
    )
  }
}
export default HornedBeast;
