import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../signUp/signUp.module.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import useLogicLogin from "./useLogicLogin";

function SignUp() {
  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.rectangle}>
          <div className={styles.header}>
            <img src={logo1} alt="a" />
            <h1>Welcome to Zahubook</h1>
          </div>
          <div className={styles.background}>
            <img src={background} alt="a" />
            <div className={styles.form}>
              <img src={logo2} alt="a" />
              <p>Create an account</p>
              <div className={styles.SignUp}>
                <label htmlFor="fullname">Full Name</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="text"
                  placeholder="Your Name"
                />
                <br />
                <label htmlFor="gender">Gender</label>
                <div className={styles.button_radio}>
                  <div>
                    <input id="" type="radio" value="" name="bordered-radio" />
                    <label>Male</label>
                  </div>
                  <div>
                    <input id="" type="radio" value="" name="bordered-radio" />
                    <label>Female</label>
                  </div>
                </div>
                <label htmlFor="date">Date of birth</label>
                <br />
                <div className={styles.calendar}>
                  <input type="date" className="w-96 text-3xl rounded-lg" />
                </div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="email"
                  placeholder="Your Email"
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="password"
                  placeholder="Your Password"
                />
                <br />
                <label htmlFor="confirm">Confirm Password</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="password"
                  placeholder="Your Password"
                />
                <br />
                <div className={styles.input_checkbox}>
                  <input className={styles.checkbox} type="checkbox" />
                  <div className={styles.term_policy}>
                    I accept Zahubook's <span>Terms of Service</span> and{" "}
                    <span>Privacy Policy</span>.
                  </div>
                </div>
                <div className={styles.btn_wrapper}>
                  <button type="button" onClick={onsubmit} className={styles.submit}>
                    Create Account
                  </button>
                </div>
                <div className={styles.change_to_signIn}>
                  <span>Already have an account? </span>
                  <Link to="/">Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
