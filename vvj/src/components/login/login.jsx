import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const[token, setToken] = useState(localStorage.getItem('token') || '');
  const [isloggedIn, setIsLoggedIn] = useState(!!token);
  const[loader, setLoader] = useState(false);
  const navigate = useNavigate();
  console.log("Is Logged In:", isloggedIn);
console.log("Token:", token);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    console.log({ email, password });
    setLoader(true); // show spinner

    axios.post('http://127.0.0.1:8000/VJISS/login', { email, password })
      .then(response => {
        console.log('Login successful:', response.data);
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        console.log("Stored Token:", response.data.token);

        setTimeout(() => {
        setLoader(false);        // hide spinner
        navigate("/");    // redirect
      }, 2000); 
        // Handle successful login (e.g., store tokens, redirect)
      })
      .catch(error => {
        console.error('Login failed:', error);
          setIsLoggedIn(false);
          setLoader(false);
        alert('Login failed. Please check your credentials and try again.');
        // Handle login failure
      });

    // Here you can add your login logic, e.g., API call to authenticate the user
  }
  return (
     <div className="login-root">
    <div className="box-root flex-flex flex-direction--column" style={{minHeight: "100vh", flexGrow: 1}}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{gridArea: "top / start / 8 / end"}}>
            <div className="box-root" style={{backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%), flex-grow: 1"}}>
            </div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "4 / 2 / auto / 5"}}>
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "6 / start / auto / 2"}}>

            <div className="box-root box-background--blue800" style={{flexGrow: 1}}>
            </div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "7 / start / auto / 4"}}>
            <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "8 / 4 / auto / 6"}}>
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "2 / 15 / auto / end"}}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "3 / 14 / auto / end"}}>
            <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "4 / 17 / auto / 20"}}>
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "5 / 14 / auto / 17"}}>
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
          </div>
        </div>
      </div>
      <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">VJ ISS </a></h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Sign in to your account</span>
              <form  onSubmit={handleSubmit}>
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">Password</label>
                    <div className="reset-pass">
                      {/* <a href="#" >Forgot your password?</a> */}
                    </div>
                  </div>
                  <input  type="password" id='password' name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label htmlFor="checkbox">
                    <input type="checkbox" id='checkbox' name="checkbox" required={true}/> Are you Human?
                  </label>
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue"/>
                </div>
              
              </form>
            </div>
             {loader && <div className="spinner">Loading...</div>} {/* spinner */}
          </div>
          <div className="footer-link padding-top--24">
            {/* <span>Don't have an account? <a href="">Sign up</a></span> */}
            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              {/* <span><a href="#">© Stackfindover</a></span>
              <span><a href="#">Contact</a></span>
              <span><a href="#">Privacy & terms</a></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;