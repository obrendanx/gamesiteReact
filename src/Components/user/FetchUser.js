/*
FetchUser - fetches a random users set of details from an api to display and use to allow someone to login and logout and to show the user profile
*/ 

import React, { Component } from 'react';
import Login from './Auth/Login';

export class FetchUser extends Component {
    state = {
        loading: true,
        person: null,
        username: null,
        password: null,
        email: null,
        profileImg: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ person: data.results[0], 
            loading: false, 
            username: data.results[0].login.username, 
            password: data.results[0].login.password, 
            email: data.results[0].email,
            profileImg: data.results[0].picture.medium,
            first: data.results[0].name.first,
            last: data.results[0].name.last,
            location_street: data.results[0].location.street.name,
            location_code: data.results[0].location.postcode,
            location_country: data.results[0].location.country});
    };
    

    render() {

        return (
            <div>
                {/* {this.state.loading || !this.state.person ? (
                    <h2></h2>
                ) : (
                    <h1></h1>
                )} */}

                <div className="fetchLogin">
                    <Login username={this.state.username} password={this.state.password} email={this.state.email} profileImg={this.state.profileImg} firstname={this.state.first} lastname={this.state.last} location_street={this.state.location_street}  location_code={this.state.location_code} location_country={this.state.location_country}/>
                </div>
            </div>
        )
    }
}

export default FetchUser

