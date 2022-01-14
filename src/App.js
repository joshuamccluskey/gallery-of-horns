import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

import data from './data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeast: '',
      horns: '🦄',
      show: false,

    }
  }


  handleShow = (beast) => {
    this.setState({
      show: true,
      currentBeast: beast
    })
  };

  handleHide = () => {
    this.setState({
      show: false
    })
  };


  render() {
    console.log(this.state.currentBeast)
    return (
      <>

        <Header horns={this.state.horns} />
        <SelectedBeast
          handleShow={this.handleShow}
          handleHide={this.handleHide}
          currentBeast={this.state.currentBeast}
          show={this.state.show}
        />
        <Main data={data} handleShow={this.handleShow} />
     
        <Footer />
      </>
    )
  }
}

export default App;
