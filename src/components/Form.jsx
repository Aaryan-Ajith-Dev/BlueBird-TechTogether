
import React, { useState } from "react";
import { Formbg } from "../assets";
import axios from "axios";

const Form1 = () => {
  const checkLogin = async(userData)=>{
    const isValid =await axios.post('http://localhost:5000/login',userData)
    if(isValid === null){
      alert('Invalid Username');
    }
    else if(isValid===false){
      alert('Please check you password');
    }
    else{
      alert('Logged in successfully');
    }
  }
  const checkSignUp = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', userData);
      const isUsernameTaken = response.data;
  
      if (isUsernameTaken===false) {
        alert('Username already taken');
      } else {
        alert('Registered successfully');
      }
    } catch (error) {
      // Handle any errors that occur during the server request
      console.error('Error during sign-up:', error);
      alert(error);
    }
  }

  
  const [active, setActive] = useState(false);
  const [pass,setPass]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const handleRegisterClick = (name,pass) => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

  return (
  <div className="form" id="signup" style={{backgroundImage:`url(${Formbg})` }}>
      <div className="form-text">Live <br/> Love <br/> Laugh</div>

    <div className={`wrapper${active ? " active" : ""}`}>
      <div className="form-box login" style={{ transform: `translateX(${active ? "-400px" : "0"})` }} >
        <h2>Login</h2>
        <form action="#">
          <div className="input-box" value={name} onChange={()=>{setName(event.target.value)}}>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box" value={pass} onChange={()=>{setPass(event.target.value);}}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn" onClick={()=>{
            const user = {
              name:name,
              password: pass
            }
            checkLogin(user);
          }}>
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a className="register-link" onClick={handleRegisterClick}>
                Sign-Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register" style={{ transform: `translateX(${active ? "0" : "400px"})` }}>
        <h2>Sign-Up</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" value={name} onChange={()=>{setName(event.target.value)}} required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="email" required value={email} onChange={()=>{setEmail(event.target.value)}}/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" value={pass} onChange={()=>{setPass(event.target.value);}} required/>
            <label>Password</label>
          </div>
          <button type="submit" className="btn" onClick={()=>{
            const user = {
              name:name,
              email: email,
              password: pass
            }
            checkSignUp(user);
          }}>
            Sign-Up
          </button>
          <div className="login-register">
            <p>
              Already have an account?
              <a className="login-link" onClick={handleLoginClick}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form1;
