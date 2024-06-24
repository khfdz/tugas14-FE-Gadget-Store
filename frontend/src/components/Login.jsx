import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imageLogin from '../images/home-image/imageLogin.png';
import iconProfile from '../images/icon/solar_user-circle-broken.png';
import iconPassword from '../images/icon/iconPassword.png';
import iconGoogle from '../images/icon/iconGoogle.png';
import iconEyes from '../images/icon/iconEyes.png';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (login(email, password)) {
      alert('You have successfully logged in');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Background Image */}
      <img src={imageLogin} alt="Login" className="absolute inset-0 object-cover w-full h-full" />
      
      {/* Form Sign In */}
      <div className="absolute right-0  flex-col items-center justify-center h-full w-1/2 pr-20 pl-20 pt-20 bg-nt07 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center mt-8">Sign In</h2>

        <div className="relative ">
          <img src={iconProfile} alt="Profile Icon" className="absolute left-3.5 top-4 w-6" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-md block w-full h-14 p-3 pl-16 rounded-2xl mb-4 bg-nt09"
          />
        </div>

        <div className="relative ">
          <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-4 w-6" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full  pl-16 text-md rounded-2xl mb-4 bg-nt09 h-14 "
          />
          <img
            src={iconEyes}
            alt="Eyes Icon"
            className="absolute right-5 top-4 w-6 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>

        <p className="text-md text-right mb-4"><a href="#" className="">Forgot Password?</a></p>
        
        <button
          onClick={handleLogin}
          className='w-full bg-colorPrimary1   py-2  rounded-2xl mb-2 text-md h-12'
        >
          Sign In
        </button>

        <button className="w-full text-white  py-2 rounded-2xl mb-4 relative border-2 border-colorPrimary1 mt-3 flex items-center justify-center">
          <img src={iconGoogle} alt="Google Icon" className="w-6 h-6 mr-2" />
          <span className="text-md">Sign In with Google</span>
        </button>

        
        {/* Link to Registration Page */}
        <p className="text-md text-center">Don't have an account? <Link to="/register" className="text-colorPrimary1">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
