import React from 'react';


export default function Signup({handleLogoClick, isActiveSignup, handleSignup, signupPage}) {
  return (
    <div className="signup-page" useref={signupPage}>
            <div className="signup-page-top">
                <div className="signup-page-logo logo" onClick={handleLogoClick}>
                    <span className="p-1">P</span>
                    <span className="p-2">P</span>
                    PayPal
                </div>
                <button className="login">Log In</button>
            </div>
            <div className="signup-page-content">
                <div className="signup-page-content-left">
                    <div className="content-left-images">
                        <img src="images/person-1.jpg" alt=''/>
                        <img src="images/person-2.jpg" alt=''/>
                        <img src="images/person-3.jpg" alt=''/>
                    </div>
                    <h1>See for yourself why millions of people love PayPal.</h1>
                </div>
                <div className="signup-page-content-right">
                    <h3>Sign up for PayPal, it's free</h3>
                    <h4>Choose from two types of accounts:</h4>
                    <form className="signup-page-form">
                        <div className="input-group">
                            <input type="radio" name="checkbox" checked readOnly />
                            <div className="option">
                                <h3>Personal Account</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus minima, incidunt beatae veritatis ad delectus temporibus eaque enim ea!</p>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="radio" name="checkbox" />
                            <div className="option">
                                <h3>Business Account</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus minima, incidunt beatae veritatis ad delectus temporibus eaque enim ea!</p>
                            </div>
                        </div>
                        <button className="blue-btn">Continue</button>
                    </form>
                </div>
               
            </div>
        </div>
  )
}
