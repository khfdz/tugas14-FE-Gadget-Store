import React from 'react';
import { Link } from 'react-router-dom';
import iconWa from '../images/icon/iconWa.png';
import iconIg from '../images/icon/iconIg.png';
import iconFb from '../images/icon/iconFb.png';

const Copyright = () => {
    return (
        <div className=" px-4 py-6 bg-nt09">
            <div className="flex ml-20">
                <div className="  ">
                    <p className="font-bold text-xl mb-4">Gadget Store</p>
                    <p className="text-sm text-nt01 text-justify">Created by the unmatched brilliance of khfdz,<br/> this site stands as a testament to top-tier<br/> tech and unparalleled design.</p>
                </div>
                <div className="ml-40">
                    <p className="font-bold text-xl mb-2">Quick Link</p>
                    <div className='text-sm text-nt01 font-small'>
                        <Link to="/" className='block '>Home</Link>
                        <Link to="/shop" className='block '>Shop</Link>
                        <Link to="/about" className='block '>About</Link>
                        <Link to="/contact" className='block '>Contact</Link>
                    </div>
                </div>
                <div className="ml-20">
                    <p className="font-bold text-xl mb-2">Custom Area</p>
                    <div className='text-sm text-nt01 font-small'>
                        <Link to="/login" className='block '>My Account</Link>
                        <Link to="/tracking" className='block '>Tracking</Link>
                        <Link to="/order" className='block'>Order</Link>
                        <Link to="/cart" className='block '>My Cart</Link>
                    </div>
                </div>
            </div>

            <div className="flex  mt-4 space-x-2 ml-20 ">
                <a href="https://api.whatsapp.com/send?phone=6282260423997" target="_blank" rel="noreferrer">
                    <img src={iconWa} alt="Whatsapp" className="w-10" />
                </a>
                <a href="https://www.instagram.com/khfdz/" target="_blank" rel="noreferrer">
                    <img src={iconIg} alt="Instagram" className="w-10" />
                </a>
                <a href="https://www.facebook.com/BhoeIemzz/" target="_blank" rel="noreferrer">
                    <img src={iconFb} alt="Facebook" className="w-10" />
                </a>
            </div>


            <div className="flex text-2xl mt-4 ml-20 flex-col">
                <p className='mb-2 text-nt01 text-sm'>&#169; 2022 GadgetStore Copyright Permission</p>
                <p className='text-nt01 text-sm'>&#169; 2024 <a href="https://tugas-portofolio-gilt.vercel.app/">@khfdz</a></p>
            </div>
        </div>
    );
}

export default Copyright;
