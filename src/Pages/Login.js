import React, { Component } from 'react';

function loggingIn(){
  
}

class Login extends Component {
  constructor(props){
    super(props);

};

render(){
    return(
    <div>
        <button onClick={loggingIn}>
        Login
        </button>
    </div>
      );
   }
}

export default Login;
