import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal  from 'react-bootstrap/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: '🦄',
      show: true
    }
  }


  handleUnhideModal = () => {
    this.setState({
      show: true,
    })
  }

  handleHideModal = () => {
    this.setState({
      show: false
    })
  }


  render() {
    return (
      <>
        <Header horns={this.state.horns} />
        <Modal centered show={this.state.show} onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>This is a Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
        </Modal>

        <Main data={data}/>
        <Footer />
      </>
    )
  }
}

export default App;
