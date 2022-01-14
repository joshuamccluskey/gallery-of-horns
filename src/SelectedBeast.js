import React from 'react';
import Modal from 'react-bootstrap/Modal';





class SelectedBeast extends React.Component {
  render() {

    return (
      <Modal centered show={this.props.show} onHide={this.props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.currentBeast.image_url}
            alt={this.props.currentBeast.description}
          />
        </Modal.Body>
      </Modal>


    );
  }
}

export default SelectedBeast;
