import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

import iconSearch from '../images/icon/mingcute_search-3-line.png';
import iconProfil from '../images/icon/solar_user-circle-broken.png';
import iconCart from '../images/icon/solar_cart-large-4-broken.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Shop", path: "shop" },
        { link: "About", path: "about" },
        { link: "Contact", path: "contact" },
    ];

    return (
        <>
            <nav className='md:px-14 p-9 max-w-screen-2xl mx-auto text-pr09 bg-nt09 text-white rounded-bl-cusnavbl rounded-br-cusnavbr fixed top-0 right-0 left-0 text-2xl' >
                <div className='text-2xl  container mx-auto flex justify-between items-center font-small'>
                    <div className='space-x-6  md:flex items-center'>
                        <a href='/' className=' lg:flex items-center hover:text-secondary text-nt00'>
                            <span className='text-nt00'>Gadget Store</span>
                        </a>
                    </div>
                    <div className=' flex space-x-14 items-center'>
                        <ul className='hidden md:flex space-x-10'>
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <a href={path} className='text-white hover:text-secondary'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-x-6 hidden md:flex items-center'>
                        <img src={iconSearch} alt="Search Icon" className='w-8 inline-block items-center' />
                        <img src={iconProfil} alt="Profile Icon" className='w-8 inline-block items-center' />
                        <img src={iconCart} alt="Cart Icon" className='w-8 inline-block items-center' />
                    </div>
                    {/* Mobile Menu */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-white text-nt00'>
                            {isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary'/>)}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-nt03 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                {navItems.map(({ link, path }) => (
                    <a key={link} href={path} className='block hover:text-pr08'>{link}</a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
