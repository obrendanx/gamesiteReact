import React, { Component } from 'react';

class Fetchapi extends Component {
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
export default Fetchapi;
