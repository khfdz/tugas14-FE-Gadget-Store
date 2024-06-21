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
      navigate('/'); // Navigate to home page
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Background Image */}
      <img src={imageLogin} alt="Login" className="absolute inset-0 object-cover w-full h-full" />
      
      {/* Form Sign In */}
      <div className="absolute right-0  flex-col items-center justify-center h-full w-1/2 p-40 bg-nt07 rounded-lg">
        <h2 className="text-6xl font-bold mb-6 text-center mt-28">Sign In</h2>

        <div className="relative ">
          <img src={iconProfile} alt="Profile Icon" className="absolute left-3 top-3.5 w-8" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-3xl block w-full h-16 p-3 pl-16 rounded-2xl mb-4 bg-nt09"
          />
        </div>

        <div className="relative ">
          <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-3.5 w-8" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-3 pl-16 text-3xl rounded-2xl mb-4 bg-nt09 h-16 "
          />
          <img
            src={iconEyes}
            alt="Eyes Icon"
            className="absolute right-5 top-4 w-8 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>

        <p className="text-2xl text-right mb-2"><a href="#" className="">Forgot Password?</a></p>
        
        <button
          onClick={handleLogin}
          className='w-full h-16 bg-colorPrimary1  font-small py-2 px-6 rounded-2xl mb-2 text-3xl'
        >
          Sign In
        </button>

        <button className="w-full h-16 text-white font-bold py-3 px-6 rounded-2xl mb-4 relative border-2 border-colorPrimary1 mt-3">
          <img src={iconGoogle} alt="Google Icon" className="absolute left-3 top-3 w-10 h-10" />
          <span className="ml-10 text-small font-small text-3xl">Sign In with Google</span>
        </button>
        
        {/* Link to Registration Page */}
        <p className="text-2xl text-center">Don't have an account? <Link to="/register" className="text-colorPrimary1">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
