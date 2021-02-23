import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);

};

render(){
    return (
      <div className="Home">
        <h1>{this.props.loggedInStatus}</h1>
      </div>
    )
  }
}
export default Home;
