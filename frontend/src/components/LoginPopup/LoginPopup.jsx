import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [ currentState, setCurrentState ] = useState( "Login" );
  return (
    <div className='login-popup' id='login-popup' >
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currentState}</h2>
          <img onClick={()=>setShowLogin(false) } src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? <></> : <input type="text" name="" id="" placeholder='Your Name' required /> }
          
          <input type="email" name="" id="" placeholder='Email Address' required />
          <input type="password" name="" id="" placeholder='Password' required />
        </div>
        <button> { currentState === "Sign Up" ? " Create Account" : "Login" } </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p> By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
        {currentState === "Login" ? <p> Create a new Account? <span onClick={()=> setCurrentState("Sign Up")}> Click Here </span> </p> : 
        <p>Already have an account? <span onClick={()=> setCurrentState("Login")}>Login</span> </p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
