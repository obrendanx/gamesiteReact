import React, { useEffect, useState }  from 'react';
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

const Loogin = () => {
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
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input 
                    name="name" 
                    placeholder="Name" 
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
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
    )
}

export default Loogin
