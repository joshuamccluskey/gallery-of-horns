import React from "react";



import HornedBeast from "./HornedBeast.js";
import Form from 'react-bootstrap/Form';


import "./Main.css";

class Main extends React.Component {
  render() {




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
        <Form>
          <Form.Group controlId="hornForm">
            <Form.Label>Horn Form</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select the # Horns to See</option>
              <option value="all">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Form>
        {beastMap}
      </main>
    )
  }
}

export default Main;
