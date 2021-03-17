import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './scss/App.scss';

class App extends Component {
  constructor(props){
    super(props);

};

render(){
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    )
  }
}
export default App;
