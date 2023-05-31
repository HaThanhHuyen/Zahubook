// import logo from './logo.svg';
import './App.css';
import Login from "../src/pages/welcome/login";
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn'
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import NewPassword from './pages/newPassword/newPassword';
import HomePage from './pages/homePage/homePage';
import SimpleSlider from './components/SimpleSlider';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomeAdmin from './pages/homePage/homeAdmin';
import Profile from './pages/profile/profile';
import PageLeft from './pages/pageLeft/pageLeft';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/simpleSlider" element={<SimpleSlider />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pageLeft" element={<PageLeft />} />
      </Routes>
    </div>
  );
}

export default App;
