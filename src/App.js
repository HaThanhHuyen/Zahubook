// import logo from './logo.svg';
import './App.css';
import Login from "../src/pages/welcome/login";
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn'
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import NewPassword from './pages/newPassword/newPassword';
import HomePage from './pages/homePage/homePage';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme ='colored'></ToastContainer>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
      {/* <ToastContainer position='top-right' /> */}
    </div>
  );
}

export default App;
