import React, { Component } from 'react';
import Navbar from '../Components/Navbar'

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      name:'',
      password:'',
    }
};

  handleChange =  (e) =>{
    const {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.history.push('/Welcome')
  }

  render(){
      return(
      <div>
          <form onSubmit = {this.handleSubmit}>
            <input type='name' name='name' placeholder='name...' required onChange = {this.handleChange}/>
            <input type='password' name='pwd' placeholder='password...' required onChange = {this.handleChange}/>
            <button onSubmit = {this.handleSubmit}>Login</button>
            <h1>Hello {this.state.name}</h1>
          </form>
      </div>
        );
     }
  }

export default Login;
