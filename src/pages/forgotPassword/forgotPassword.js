import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../forgotPassword/forgotPassword.module.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import useLogicLogin from "./useLogicLogin";

function ForgotPassword() {
  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.rectangle}>
          <div className={styles.header}>
            <img src={logo1} alt="a" />
            <h1 className={styles.titleForgot}>Welcome to Zahubook</h1>
          </div>
          <div className={styles.background}>
            <img src={background} alt="a" />
            <div className={styles.form}>
              <img src={logo2} alt="a" />
              <p>Forgot Password</p>
              <div className={styles.SignUp}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="email"
                  placeholder="Your Email"
                />
                <br />

                <div className={styles.btn_wrapper}>
                  <button type="button" onClick={onsubmit} className={styles.submit}>
                    Reset Password
                  </button>
                </div>
                <div className={styles.change_to_signIn}>
                  <span>Already have an account? </span>
                  <Link to="/">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
