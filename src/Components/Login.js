// import React, { useEffect, useState }  from 'react';
// import { useDispatch } from "react-redux";
// import { login } from "../app/features/userSlice";
// import Footer from '../Components/Footer';

// const Login = (props) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         dispatch(login({
//             name:name,
//             email:email,
//             password:password,
//             loggedIn: true,
//             profileImg: props.profileImg,
//             firstname: props.firstname,
//             lastname: props.lastname,
//             location_street: props.location_street,
//             location_code: props.location_code,
//             location_country: props.location_country
//         }));

//         if(name != props.username || password != props.password || email != props.email){
//             alert("Incorrect username or password!");
//         }else{
//             alert("Logged In!");
//         };
//     }

//     return (
//         <div className="login">
//             <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
//                 <h1>Login Here</h1>
//                 <input 
//                     name="name" 
//                     placeholder="Username" 
//                     value={name} 
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input 
//                     name="email" 
//                     placeholder="Email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input 
//                     name="password" 
//                     type="password"
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit" className="submit_btn">Submit</button>

//                 <div class="fixed_sidebar_login">
//                 <h3>Test User</h3>
//                 <h4>Username: {props.username}</h4>
//                 <h4>Password: {props.password}</h4>
//                 <h4>Email: {props.email}</h4>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login

import React, { useEffect, useState } from "react";

function Login() {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username, email, password,
        }),
    })
   

    const data = await response.json()

    if(data.user){
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location = './Profile' 
    }else{
        alert("Please check your username and password")
    }
    console.log(data)
}

  return (
    <div>

        <h1>Login</h1>
        <form onSubmit={loginUser}>
            <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                placeholder="Username" 
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" 
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" 
            />
            <input type="submit" value="Login" />
        </form>

    </div>
  )
}

export default Login