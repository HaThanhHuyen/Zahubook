import logo from "../../images/zahubook1.png";
import background from "../../images/miximeo.png";
import styles from "../welcome/login.module.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import useLogicLogin from "./useLogicLogin";

function Login() {
  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.rectangle}>
          <div className={styles.background_left}>
            <img src={background} alt="a" />
          </div>
          <div id={styles.background_right}>
            <div className={styles.logo}>
              <img src={logo} alt="a" />
            </div>
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_wrapper_SignIn}>
                <Link to="/signIn">
                  <button className={styles.SignIn}>Sign In</button>
                </Link>
              </div>
            </div>
            <div className={styles.btn_wrapper_SignUp}>
              <Link to="/signUp">
                <button className={styles.SignUp}>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
