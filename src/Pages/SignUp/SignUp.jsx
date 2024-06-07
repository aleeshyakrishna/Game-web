import React from "react";
import logo from "../../assets/logo.png";
import { NavLink,useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"
function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className={styles.signup_main}>
          <div className={styles.signup_top}>
            {/* <img src={EmojiA} alt="" /> */}

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
          <form>
            <div className={styles.inside_sigup_from}>
              <div className={styles.form_input_a}>
                <label>
                  user name<span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  placeholder="Name"
                  // className={errors.name ? "error-input" : ""}
                />
                {/* {errors.name && <span className="error">{errors.name}</span>} */}
                <label>
                  email<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  placeholder="Email"
                  // className={errors.email ? "error-input" : ""}
                />
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
                <label>
                  mobile number<span>*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                //   value={formData.phoneNumber}
                //   onChange={handleChange}
                  placeholder="Phone Number"
                  // className={errors.phoneNumber ? "error-input" : ""}
                />
                {/* <div style={{ width: "80%" }}>
                {errors.phoneNumber && (
                  <span className="error">{errors.phoneNumber}</span>
                )}
              </div> */}
              </div>
              <div className={styles.form_input_b}>


              {/* <label>
                  username<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  placeholder="Password"
                  // className={errors.password ? "error-input" : ""}
                /> */}
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  placeholder="Password"
                  // className={errors.password ? "error-input" : ""}
                />
                {/* {errors.password && (
                <span className="error">{errors.password}</span>
              )} */}
                <label>
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  // value={formData.confirmPassword}
                  // onChange={handleChange}
                  placeholder="Confirm Password"
                  // className={errors.confirmPassword ? "error-input" : ""}
                />
                {/* {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )} */}
              </div>
            </div>
            <div className={styles.signup_aggry_form}>
              <div>
                {/* <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p> */}
                {/* {errors.agree && <span className="error">{errors.agree}</span>} */}
              </div>
              <br/>
              <button type="submit">Signup</button>
            </div>
          </form>
          <div className="other-signup">
            {/* <p>or Sign up using </p> */}
            {/* <div className="ggl-fc-athentication">
              <div className="fb"><LiaFacebookF /></div>
              <div className="ggl"><FcGoogle /></div>
            </div> */}
            <p>
              Already have an Account?{" "}
              <NavLink to="/user/login">
              <span style={{ color: "#256C55" }}>Log in</span>
            </NavLink>
            </p>
            {/* <img src={CoffieCup} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
