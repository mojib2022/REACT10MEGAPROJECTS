import React from 'react'


export default function Login({handleLogoClick,isActiveLogin,handleSignup,loginPage}) {
  return (
    <div className="login-page" ref={loginPage}>
            <div className="login-page-content">
                <div className="login-page-logo logo" onClick={handleLogoClick}>
                    <span className="p-1">P</span>
                    <span className="p-2">P</span>
                    <span>Pay</span><span>Pal</span>
                </div>
                <form className="login-page-form">
                    <input type="text" className="form-login-input" placeholder="Email or mobile number" />
                    <input type="password" className="form-login-input" />
                    <input type="button" className="form-login-btn" value="Log In" />
                    <a href="#a" className="form-login-link">Having trouble logging in?</a>
                    <span>or</span>
                    <input type="button" className="form-signup-btn signup" value="Sign Up" onClick={handleSignup} />
                </form>
            </div>
        </div>
  )
}
