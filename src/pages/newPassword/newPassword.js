import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../newPassword/newPassword.module.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import useLogicLogin from "./useLogicLogin";

function NewPassword() {
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
              <p>New Password</p>
              <div className={styles.SignUp}>
                <label htmlFor="password">Enter your new password</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="password"
                  placeholder="Your Password"
                />
                <br />

                <label htmlFor="password">Confirm new password</label>
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
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPassword;
