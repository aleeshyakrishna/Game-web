import React, { useState } from "react";
import styles from "./SignIn.module.css"
import EmojiA from "../../assets/game2.png";
import ALlogo from "../../assets/game1.png";
import logo from "../../assets/logo.png"
// import Yellowline from "../Images/Yellowline.png";
// import ElementB from "../Images/ElementB.png";
// import Tbox from "../Images/Tbox.png";
// import { LiaFacebookF } from "react-icons/lia";
// import { FcGoogle } from "react-icons/fc";
// import LoginG from "../Images/LoginG.png";
// import axios from "../Utils/Baseurl.js";
// import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { color } from "@chakra-ui/react";
function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({ username: "", password: "" });
  
    const validateForm = () => {
      let valid = true;
      const newErrors = { username: "", password: "" };
  
      if (!formData.username.trim()) {
        newErrors.username = "username is required";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
        newErrors.username = "username is invalid";
        valid = false;
      }
  
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Form submission logic here
        console.log("Login Form submitted :", formData);
  
        // If there are any errors, setErrors will handle them, no need to check newErrors here.
        // So, removing the below block.
        // if (Object.keys(newErrors).length > 0) {
        //   setErrors(newErrors);
        // } else {
        // Form submission logic here
        console.log(formData, "Sign up Form submitted successfully!");
        // const response = await axios.post("/user_registration", formData);
  
        // toast.success("Login Successful");
        // backend connectint area
        // const response = await axios.post("/user_signin", formData);
        // console.log(response, "this is the response of registration............");
        // if (response) {
        //   console.log(response.data.message, "hhehheeeee");
        //   if (response.data.message == "invalid password or id"){
        //     toast.error("Invalid username or password");
        //   }else{
        //   navigate("/");
        //   }
        // }
        // }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <div>
          <div className={styles.signup_main}>
            <div className={styles.signin_top}>
              
              <img
                src={logo}
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </div>
          
          </div>
          <div className={styles.signup_form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inside_sigup_from}>
                <div className={styles.form_input_a}>
                  <label>
                    username<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? "error_input" : ""} // Apply the error-input class if there's an error
                  />
                  {errors.username && (
                    <div style={{color:'red'}} className={styles.error_message}>{errors.username}</div>
                  )}
                  <p></p>
                </div>
                <div  className={styles.form_input_b}>
                  <label>
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "error-input" : ""} // Apply the error-input class if there's an error
                  />
                  {errors.password && (
                    <div style={{color:'red'}} className={styles.error_message}>{errors.password}</div>
                  )}
                  {/* <Link to="/Recoverpassword">
                    <p>Forgot Password...</p>
                  </Link> */}
                </div>
              </div>
              <br/><br/>
              <div className="login-btm">
                <div className={styles.signup_aggry_form}>
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
            <div className={styles.other_signup}>
              {/* <p>or Login using </p> */}
              {/* <div className={styles.ggl_fc_athentication}>
                <div className="fb">
                  <LiaFacebookF />
                </div>
                <div className="ggl">
                  <FcGoogle />
                </div>
              </div> */}
              <p>
                Don't have an account?{" "}
                <NavLink to="/user/register">
                  <span style={{ color: "#256C55" }}>Sign up</span>
                </NavLink>
              </p>
              {/* <img src={EmojiA} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default SignIn;