import React from 'react';
import { Link } from 'react-router-dom';
import iconWa from '../images/icon/iconWa.png';
import iconIg from '../images/icon/iconIg.png';
import iconFb from '../images/icon/iconFb.png';

const Copyright = () => {
    return (
        <div className=" px-4 py-12 bg-nt09">
            <div className="flex space-x-80 items-start  ml-20">
                <div className="flex flex-col space-y-1 ">
                    <p className="font-bold text-4xl mb-4">Gadget Store</p>
                    <p className="text-2xl text-justify" style={{ lineHeight: '2.5rem'}}>Created by the unmatched brilliance of khfdz,<br/> this site stands as a testament to top-tier<br/> tech and unparalleled design.</p>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-bold text-4xl mb-4">Quick Link</p>
                    <div className='text-2xl font-small'>
                        <Link to="/" className='block mb-2'>Home</Link>
                        <Link to="/shop" className='block mb-2'>Shop</Link>
                        <Link to="/about" className='block mb-2'>About</Link>
                        <Link to="/contact" className='block mb-2'>Contact</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-bold text-4xl mb-4">Custom Area</p>
                    <div className='text-2xl font-small'>
                        <Link to="/login" className='block mb-2'>My Account</Link>
                        <Link to="/tracking" className='block mb-2'>Tracking</Link>
                        <Link to="/order" className='block mb-2'>Order</Link>
                        <Link to="/cart" className='block mb-2'>My Cart</Link>
                    </div>
                </div>
            </div>

            <div className="flex  mt-4 space-x-4 ml-20 mb-4 ">
                <a href="https://api.whatsapp.com/send?phone=6282260423997" target="_blank" rel="noreferrer">
                    <img src={iconWa} alt="Whatsapp" className="w-16" />
                </a>
                <a href="https://www.instagram.com/khfdz/" target="_blank" rel="noreferrer">
                    <img src={iconIg} alt="Instagram" className="w-16" />
                </a>
                <a href="https://www.facebook.com/BhoeIemzz/" target="_blank" rel="noreferrer">
                    <img src={iconFb} alt="Facebook" className="w-16" />
                </a>
            </div>


            <div className="flex text-2xl mt-10 ml-20 flex-col">
                <p className='mb-2'>&#169; 2022 GadgetStore Copyright Permission</p>
                <p>&#169; 2024 <a href="https://tugas-portofolio-gilt.vercel.app/">@khfdz</a></p>
            </div>
        </div>
    );
}

export default Copyright;
