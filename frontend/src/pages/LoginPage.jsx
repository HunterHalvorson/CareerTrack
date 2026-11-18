import './css/LoginPage.css'

function LoginPage() {
  return (
    <div className = 'login-container'>
        <div className = 'login-left'>
            <div className="signin-header">
                <h1 className = "signin-header-test">Sign In</h1>
                <p className = "signin-header-account-message">Don't have an account? <span>Create one</span></p>
            </div>
            <div className="login-metrics">
                <label>
                    E-mail  
                    <input type="text" name = "email" placeholder='hhhalvorson@gmail.com'/>
                </label>
                <label>
                    Password 
                    <input type="password" name = "password" placeholder='@^%#'/>
                </label>
            </div>
            {/* <div className="remember-forgot">
                <label>
                    <input type="checkbox" name="myCheckbox" /> Remember me
                </label>
                <p>Forgot Password?</p>
            </div>
            <button className="signin-button">Sign In</button>
            <hr /> or <hr /> */}

        </div>
        <div className="login-right">
        </div>
    </div>
  )
}

export default LoginPage
