import React from "react";
import HornedBeast from "./HornedBeast.js";
import Form from 'react-bootstrap/Form';
import Data from './data.json';

import "./Main.css";
import { Container } from "react-bootstrap";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      everyBeast: Data,
      seeBeast: Data

    }
  }

  handleSelect = (hornNum) => {

    console.log(typeof hornNum);

    hornNum = parseInt(hornNum);

    let updateBeast = this.state.everyBeast.filter(beast => beast.horns === hornNum ? beast : false);

    console.log(updateBeast);

    this.setState({
      seeBeast: updateBeast
    })

    console.log(typeof hornNum);

  };


  render() {

    let beastMap = this.state.seeBeast.map((beast, index) => (
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
        <Container>
          <Form>
            <Form.Group controlId="selected">
              <Form.Label>Horn Form</Form.Label>
              <Form.Select
                onChange={(e) => this.handleSelect(e.target.value)}
                aria-label="Select the Number of Horns to See">
                <option>Select the # Horns to See</option>
                {/* <option value="0">All the Horns</option> */}
                <option value="1">☝️ One</option>
                <option value="2">✌️ Two</option>
                <option value="3">3⃣️ Three</option>
                <option value="100">💯 One Hundred</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
        {beastMap}
      </main>
    )
  }
}

export default Main;
