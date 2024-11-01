import React, { useState } from "react"; // Import useState from React
import axios from "axios"; // Import axios for API requests
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link from react-router-dom
import './signup.css'; // Import the CSS file for styles

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    history("/home", { state: { id: email } });
                }
            })
            .catch(e => {
                alert("wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <div className="container">
                <h1>Signup</h1>
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
                    <button type="submit" onClick={submit} value="Signup">Signup</button>
                </form>
                <p>OR</p>
                <Link to="/">Login Page</Link>
            </div>
        </div>
    );
}

export default Signup;
