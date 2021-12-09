import React, { useEffect, useState }  from 'react';

function Register() {
    const [username_set, setUsername] = useState("");
    const [email_set, setNewEmail] = useState("");
    const [firstname_set, setFirstname] = useState("");
    const [lastname_set, setLastname] = useState("");
    const [password_set, setNewPassword] = useState("");
    const [password_retype_set, setPasswordRetype] = useState("");

    return (
        <div>
            <form className="register_form">
                <form className="login_form">
                <h1>Register</h1>
                <input 
                    name="username_set" 
                    placeholder="Username... " 
                    value={username_set}
                />
                <input 
                    name="email_set" 
                    placeholder="Email... "  
                    value={email_set}
                />
                <input 
                    name="password_set" 
                    type="password"
                    placeholder="Password... " 
                    value={password_set}
                />
                <input 
                    name="password-retype_set" 
                    type="password"
                    placeholder="Password Retype... " 
                    value={password_retype_set}
                />
                <button type="submit" className="register_btn">Register</button>
            </form>
            </form>
        </div>
    )
}

export default Register
