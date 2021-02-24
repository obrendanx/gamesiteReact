import React, { Component } from 'react';

export class Fetchapi extends Component {
  constructor(props){
    super(props);
    this.state = {
      //stores items form api
      //know when items have been loaded from api
      items: [],
      isLoaded: false,
    }
}

componentDidMount() {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

}

    render() {
      var { isLoaded, items } = this.state;

      if (!isLoaded) {
        return <div>Loading ...</div>;
      }

      else{
        return (
          <div className="Fetch">

            <ul>
              {items.map(item => (
                //key is used to let js know which items have been  updated or modified
                <li key={item.id}>
                  Name: {item.name} | Email: {item.email}
                </li>
              ))};
            </ul>

          </div>
        );
      }
  }

}

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

};

handleChange(event){
  this.setState({value: event.target.value});
}

handleSubmit(event){
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render(){
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <Fetchapi />
          </form>
        </div>
      );
  }
}
export default Login;
