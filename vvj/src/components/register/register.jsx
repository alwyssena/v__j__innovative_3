import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../login/login.css";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    PhoneNumber: "",
    gender: "Male",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

console.log("Submitting form data:", formData);
const genderMap = {
  Male: "M",
  Female: "F",
  Transgender: "T",
};

axios.post("http://127.0.0.1:8000/VJISS/create_user", {
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.email,
  phone_number: formData.PhoneNumber,
  password: formData.password,
  
  gender: genderMap[formData.gender],
  date_of_birth: formData.dob,
})
.then(res => {
  console.log("Success:", res.data);
  alert("Registration successful! Please log in.");
  navigate("/login");
})
.catch(err => {
  console.error("Error:", err.response?.data);
});





   


    // API call here
  };

  return (
   <>



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

<div >
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

       <div className="field padding-bottom--24">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                   <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="PhoneNumber">Mobile</label>
                    <input
                      type="tel"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      pattern="[6-9][0-9]{9}"
                      placeholder="10-digit mobile number"
                      value={formData.PhoneNumber || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                   <div className="field padding-bottom--24">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      
                      required
                      style={{ width: "100%", height: "44px" }}
                    >
                      
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                   <div className="field padding-bottom--24">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
    <div className="field padding-bottom--24">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword||''}
                      onChange={handleChange}
                      required
                    />
                  </div>

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
             {/* {loader && <div className="spinner">Loading...</div>}  */}
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

   </>
  );
}


export default Registration;
