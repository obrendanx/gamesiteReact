import React, { Component } from 'react';
import Login from './Login';

export class FetchUser extends Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ person: data.results[0], loading: false });
    };

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <h2>loading ...</h2>
                ) : (
                    <h1>{this.state.person.name.first}</h1>
                )}
                <Login person={this.state.person} />
            </div>
        )
    }
}

export default FetchUser

