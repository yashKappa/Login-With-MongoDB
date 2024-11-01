import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './signup.css'; // Importing the shared CSS file

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", { email, password })
            .then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <div className="container">
                <h1>Login</h1>
                <form action="POST">
                    <div className="form-group">
                        <input 
                            type="email" 
                            id="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" onClick={submit} value="Login">Login</button>
                </form>
                <p>OR</p>
                <Link to="/Signup">Signup Page</Link>
            </div>
        </div>
    );
}

export default Login;
