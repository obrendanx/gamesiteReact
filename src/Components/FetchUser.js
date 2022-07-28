/*
FetchUser - fetches a random users set of details from an api to display and use to allow someone to login and logout and to show the user profile
*/ 

import React, { Component } from 'react';
import Login from './Login';

export class FetchUser extends Component {
    state = {
        loading: true,
        person: null,
        username: null,
        password: null,
        email: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ person: data.results[0], loading: false, username: data.results[0].login.username, password: data.results[0].login.password, email: data.results[0].email });
    };
    

    render() {

        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <h2>loading ... {<Login username="loading ..." password="loading ..." email="loading ..."/>}</h2>
                ) : (
                    <h1></h1>
                )}

                <div className="fetchLogin">
                    <Login username={this.state.username} password={this.state.password} email={this.state.email}/>
                </div>
            </div>
        )
    }
}

export default FetchUser

