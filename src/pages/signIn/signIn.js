import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../signIn/signIn.module.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import useLogicLogin from "./useLogicLogin";

function SignIn() {
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
              <p>Sign in to your account</p>
              <div className={styles.SignUp}>
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
                <div className={styles.btn_wrapper}>
                  <button
                    type="button"
                    onClick={onsubmit}
                    className={styles.submit}
                  >
                    Create Account
                  </button>
                </div>
                <div className={styles.forgot_psw}>
                  <Link to ="/forgotPassword">Forgot Password</Link>
                  {/* <a href="../">Forgot Password</a> */}
                </div>
                <div className={styles.change_to_signIn}>
                  <span>Didn't have an account? </span>
                  <Link to="/">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
