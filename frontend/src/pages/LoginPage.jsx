import "./css/LoginPage.css";
import googleLogo from "../assets/google.png";
import { useState } from "react";

function LoginPage() {

    const [signIn, setSignIn] = useState(true);

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
                            />
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" placeholder="@^%#" />
                        </label>
                        </div>
                        <div className="remember-forgot">
                        <label>
                            <input type="checkbox" name="myCheckbox" /> Remember me
                        </label>
                        <p>Forgot Password?</p>
                    </div>
                    <button className="signin-button">Sign In</button>
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
                            <input type="text" name="email" placeholder="hhhalvorson@gmail.com"/>
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" placeholder="@^%#" />
                        </label>
                        <label>
                            Confirm Password
                            <input type="password" name="password" placeholder="@^%#" />
                        </label>
                    </div>
                    <button className="signin-button">Create Account</button> 
                </div>
                <div className="login-right"></div>
            </div>
        </>
    )
}

export default LoginPage;
