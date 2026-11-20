import "./css/LoginPage.css";
import googleLogo from "../assets/google.png";
import { useState } from "react";

function LoginPage() {

    const [signIn, setSignIn] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setConfirmPassword] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleCreateUser = async () => {
        const response = await fetch('http://127.0.0.1:8000/auth/register', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                confirm_password: comfirmPassword
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:8000/auth/login', {
            method : 'POST',
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        if (response.ok) console.log('Login SUCCESS!');
    }

    if (signIn){
        return (
            <div className="login-container">
                <div className="login-left">
                    <div className="signin-header">
                        <h1 className="signin-header-test">Sign In</h1>
                        <p className="signin-header-account-message">
                            Don't have an account? <span onClick={() => setSignIn(!signIn)}>Create one</span>
                        </p>
                    </div>
                    <div className="login-metrics">
                        <label>
                            E-mail
                            <input
                                type="text"
                                name="email"
                                placeholder="hhhalvorson@gmail.com"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            Password
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="@^%#" 
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </label>
                        </div>
                        <div className="remember-forgot">
                        <label>
                            <input type="checkbox" name="myCheckbox" /> Remember me
                        </label>
                        <p>Forgot Password?</p>
                    </div>
                    <button className="signin-button" onClick={handleLogin}>Sign In</button>
                    <button className="google-signin">
                        <img src={googleLogo} />
                        <h3>Sign In with Google</h3>
                    </button>
                </div>
                <div className="login-right"></div>
            </div>
        );
    }

    return (
        <>
            <div className="login-container">
                <div className="login-left">
                    <div className="signin-header">
                        <h1 className="signin-header-test">Create Account</h1>
                        <p className="signin-header-account-message">
                            Have an account? <span onClick={() => setSignIn(!signIn)}>Sign In</span>
                        </p>
                    </div>
                    <div className = "login-metrics">
                        <label>E-mail
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="hhhalvorson@gmail.com"
                                value = {email}
                                onChange = {(e) => {setEmail(e.target.value)}}
                                />
                        </label>
                        <label>
                            Password
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="@^%#" 
                                value = {password}
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </label>
                        <label>
                            Confirm Password
                            <input 
                                type="password" 
                                name="confirm_password" 
                                placeholder="@^%#" 
                                value = {comfirmPassword}
                                onChange = {(e) => {setConfirmPassword(e.target.value)}}
                            />
                        </label>
                    </div>
                    <button  onClick = {handleCreateUser} className="signin-button">Create Account</button> 
                </div>
                <div className="login-right"></div>
            </div>
        </>
    )
}

export default LoginPage;
