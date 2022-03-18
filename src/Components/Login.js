import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import Footer from '../Components/Footer';

const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn: true,
        }));

        if(name != props.person.login.username || password != props.person.login.password || email != props.person.email){
            alert("Incorrect username or password!");
        }else{
            alert("Logged In!");
        };
    }

    const tempEmail = props.person;
    const tempPass = props.person;
    const tempUser = props.username;


    return (
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input 
                    name="name" 
                    placeholder="Username" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    name="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    name="password" 
                    type="password"
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit_btn">Submit</button>
            </form>
            <div class="fixed_sidebar_login">
                <h3>Test User</h3>
                <h4>Username: {props.username}</h4>
                <h4>Password: {tempPass}</h4>
                <h4>Email: {tempEmail}</h4>
            </div>
        </div>
    )
}

export default Login
