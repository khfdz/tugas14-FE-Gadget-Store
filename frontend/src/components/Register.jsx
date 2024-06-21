import React, { useState } from 'react';
import imageLogin from '../images/home-image/imageLogin.png';
import iconProfile from '../images/icon/solar_user-circle-broken.png';
import iconPassword from '../images/icon/iconPassword.png';
import iconPhone from '../images/icon/iconPhone.png';
import iconGoogle from '../images/icon/iconGoogle.png';
import iconEyes from '../images/icon/iconEyes.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };



    return (
        <div className="flex h-screen relative">
            {/* Background Image */}
            <img src={imageLogin} alt="Login" className="absolute inset-0 object-cover w-full h-full" />
            
            {/* Form Sign Up */}
            <div className="absolute right-0  flex-col items-center justify-center h-full w-1/2 p-40 bg-nt07 rounded-lg">
            
                <h2 className="text-6xl font-bold mb-6 text-center mt-28">Sign Up</h2>

                <div className="relative ">
                    <img src={iconProfile} alt="Profile Icon" className="absolute left-3 top-3.5 w-8" />
                    <input type="email" placeholder="Enter Email" className="block w-full p-3 pl-10 rounded-2xl mb-4 bg-nt09 pl-16 h-16 text-3xl" />
                </div>

                <div className="relative ">
                    <img src={iconPhone} alt="Phone Icon" className="absolute left-3 top-3.5 w-8" />
                    <input type="tel" placeholder="Enter Phone Number" className="block w-full p-3 pl-10 rounded-2xl mb-4 bg-nt09 pl-16 h-16 text-3xl" />
                </div>
                <div className="relative ">
                    <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-3 w-8" />
                    <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Enter Password"
                        className="block w-full p-3 pl-10 rounded-2xl mb-4 bg-nt09 pl-16 h-16 text-3xl"
                    />
                    <img
                        src={iconEyes}
                        alt="Eyes Icon"
                        className="absolute right-4 top-4 w-8 cursor-pointer"
                        onClick={togglePasswordVisibility1}
                    />
                </div>
                <div className="relative ">
                    <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-3 w-8" />
                    <input
                        type={showPassword2 ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="block w-full p-3 pl-10 rounded-2xl mb-4 bg-nt09 pl-16 h-16 text-3xl"
                    />
                    <img
                        src={iconEyes}
                        alt="Eyes Icon"
                        className="absolute right-4 top-4 w-8 cursor-pointer"
                        onClick={togglePasswordVisibility2}
                    />
                </div>
                
                <button className='w-full h-16 bg-colorPrimary1  font-small py-2 px-6 rounded-2xl mb-2 text-3xl'>Sign Up</button>

                <button className="w-full text-white font-bold py-3 px-6 rounded-2xl mb-4 relative border-2 border-colorPrimary1 mt-3">
                    <img src={iconGoogle} alt="Google Icon" className="absolute left-3 top-3 w-10 h-10" />
                    <span className="ml-10 font-medium text-3xl">Sign up with Google</span>
                </button>


                <p className="text-2xl text-center ">Already have an account? <Link to="/login" className="text-colorPrimary1">Sign in</Link></p>
            </div>
            </div>
        
    );
};

export default Register;
