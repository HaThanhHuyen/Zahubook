import logo2 from "../../images/logo2.png";
import logo1 from "../../images/logo.png";
import background from "../../images/miximeo.png";
import styles from "../signUp/signUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {

  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';
      if (name === null || name === '') {
          isproceed = false;
          errormessage += ' Fullname';
      }
      if (password === null || password === '') {
          isproceed = false;
          errormessage += ' Password';
      }
      if (email === null || email === '') {
          isproceed = false;
          errormessage += ' Email';
      }

      if(!isproceed){
          toast.warning(errormessage)
      }else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

          }else{
              isproceed = false;
              toast.warning('Please enter the valid email')
          }
      }
      return isproceed;
  }


  const handlesubmit = (e) => {
          e.preventDefault();
          let regobj = {name, password, email,  gender };
          if (IsValidate()) {
          //console.log(regobj);
          fetch("http://localhost:8000/user", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(regobj)
          }).then((res) => {
              toast.success('Registered successfully.')
              navigate('/login');
          }).catch((err) => {
              toast.error('Failed :' + err.message);
          });
      }
  }
  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.rectangle}>
        <form className="container" onSubmit={handlesubmit}>
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
                  value={name}
                  onChange={(e) => namechange(e.target.value)}
                />
                <br />
                <label htmlFor="gender">Gender</label>
                <div className={styles.button_radio}>
                  <div>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
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
                  value={email} onChange={e => emailchange(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className={styles.SignUp_input}
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => passwordchange(e.target.value)}
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
                  <button
                    type="button"
                    // onSubmit={handlesubmit}
                    className={styles.submit}
                  >
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
          </form>
        </div>

      </div>
    </>
  );
};
export default SignUp;
