import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageLogin from '../images/home-image/imageLogin.png';
import iconProfile from '../images/icon/solar_user-circle-broken.png';
import iconPassword from '../images/icon/iconPassword.png';
import iconPhone from '../images/icon/iconPhone.png';
import iconGoogle from '../images/icon/iconGoogle.png';
import iconEyes from '../images/icon/iconEyes.png';

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
            <div className="absolute right-0  flex-col items-center justify-center h-full w-1/2 pr-20 pl-20 pt-20 bg-nt07 rounded-lg">
                <h2 className="text-4xl font-bold mb-6 text-center mt-8">Sign Up</h2>

                <div className="relative ">
                    <img src={iconProfile} alt="Profile Icon" className="absolute left-3 top-4 w-6" />
                    <input type="email" placeholder="Enter Email" className="block w-full h-14 p-3 pl-16 rounded-2xl mb-4 bg-nt09" />
                </div>

                <div className="relative ">
                    <img src={iconPhone} alt="Phone Icon" className="absolute left-3 top-4 w-6" />
                    <input type="tel" placeholder="Enter Phone Number" className="block w-full h-14 p-3 pl-16 rounded-2xl mb-4 bg-nt09" />
                </div>

                <div className="relative ">
                    <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-4 w-6" />
                    <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Enter Password"
                        className="block w-full h-14 p-3 pl-16 rounded-2xl mb-4 bg-nt09"
                    />
                    <img
                        src={iconEyes}
                        alt="Eyes Icon"
                        className="absolute right-5 top-4 w-6 cursor-pointer"
                        onClick={togglePasswordVisibility1}
                    />
                </div>

                <div className="relative ">
                    <img src={iconPassword} alt="Password Icon" className="absolute left-3.5 top-4 w-6" />
                    <input
                        type={showPassword2 ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="block w-full h-14 p-3 pl-16 rounded-2xl mb-4 bg-nt09"
                    />
                    <img
                        src={iconEyes}
                        alt="Eyes Icon"
                        className="absolute right-5 top-4 w-6 cursor-pointer"
                        onClick={togglePasswordVisibility2}
                    />
                </div>
                
                <button className='w-full h-12 bg-colorPrimary1  py-2 rounded-2xl mb-2 text-md'>Sign Up</button>

                <button className="w-full text-white py-2 rounded-2xl mb-4 relative border-2 border-colorPrimary1 mt-3 flex items-center justify-center">
                    <img src={iconGoogle} alt="Google Icon" className="w-6 h-6 mr-2" />
                    <span className="text-md">Sign up with Google</span>
                </button>

                <p className="text-md text-center ">Already have an account? <Link to="/login" className="text-colorPrimary1">Sign in</Link></p>
            </div>
        </div>
    );
};

export default Register;
