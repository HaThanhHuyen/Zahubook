import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../signIn/signIn.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useHistory} from 'react-router-dom';
// import { useEffect, useState } from "react";
import React from "react";
import { useNavigate  } from 'react-router-dom';
import axios from "axios";
// import useLogicLogin from "../signIn/useLogicSignIn";

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://zahobook-server-minhdev-ui.vercel.app/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
      navigate('/');
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
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
                  onChange={handleEmail}
                  required
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="password"
                  placeholder="Your Password"
                  onChange={handlePassword}
                  required
                />
                <br />
                <div className={styles.btn_wrapper}>
                  <button
                    type="button"
                    className={styles.submit}
                    onClick={handleApi}
                  >
                    Create Account
                  </button>
                </div>
                <div className={styles.forgot_psw}>
                  <Link to="/forgotPassword">Forgot Password</Link>
                </div>
                <div className={styles.change_to_signIn}>
                  <span>Didn't have an account? </span>
                  <Link to="/signUp">Sign up</Link>
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
