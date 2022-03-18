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
        this.setState({ person: [
            data.results[0].login.username,
            data.results[0].login.password,
            data.results[0].email,
            data.results[0].name.first
        ], loading: false });
    };
    

    render() {

        const user = [{
            "username": this.state.person[0],
            "password": this.state.person[1],
            "name": this.state.person[3],
            "email": this.state.person[2]
        }]

        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <h2>loading ...</h2>
                ) : (
                    <h1>{user.name}</h1>
                )}
                <Login person={user.username}/>
            </div>
        )
    }
}

export default FetchUser

