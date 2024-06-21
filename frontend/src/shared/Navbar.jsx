import React, { useState, useEffect, useContext } from 'react';
import { FaTimes, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../src/context/UserContext';
import iconSearch from '../images/icon/mingcute_search-3-line.png';
import iconProfil from '../images/icon/solar_user-circle-broken.png';
import iconProfilActive from '../images/icon/solar_user-circle-broken-active.png';
import iconCart from '../images/icon/solar_cart-large-4-broken.png';
import iconCartActive from '../images/icon/solar_cart-large-4-broken-active.png';
import cartData from '../../src/DataJson/cart.json';

const Navbar = () => {
    const { user, logout } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartActive, setIsCartActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const location = useLocation();

    useEffect(() => {
        setCartItems(cartData.filter(item => item.userId === user?.id));
    }, [user]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCart = () => {
        setIsCartActive(!isCartActive);
    };

    const handleLogout = () => {
        logout();
    };

    const navItems = [
        { link: "Home", path: "/", exact: true },
        { link: "Shop", path: "/shop" },
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" },
        { link: user ? "Logout" : "Login", onClick: user ? handleLogout : null, path: user ? null : "/login" },
    ];

    const totalQuantityInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <nav className='md:px-14 p-9 mx-auto text-pr09 bg-nt09 text-white rounded-bl-cusnavbl rounded-br-cusnavbr fixed top-0 right-0 left-0 text-2xl'>
                <div className='text-2xl mx-auto flex justify-between font-small'>
                    <div className='space-x-6 md:flex'>
                        <NavLink to='/' className='lg:flex hover:text-secondary text-nt00'>
                            <span className='text-nt00 text-4xl font-semibold'>Gadget Store</span>
                        </NavLink>
                    </div>
                    <div className='flex space-x-14 text-3xl'>
                        <ul className='hidden md:flex space-x-10'>
                            {navItems.map(({ link, path, onClick, exact }) => (
                                <li key={link}>
                                    {onClick ? (
                                        <button
                                            onClick={onClick}
                                            className="text-white hover:text-secondary focus:outline-none"
                                        >
                                            {link}
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={path}
                                            exact={exact}
                                            className={location.pathname === path ? "text-colorPrimary1" : "text-white hover:text-secondary"}
                                        >
                                            {link}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-x-6 hidden md:flex'>
                        <img src={iconSearch} alt="Search Icon" className='w-12 inline-block' />
                        {user ? (
                            <img src={iconProfilActive} alt="Profile Icon" className='w-12 inline-block' />
                        ) : (
                            <img src={iconProfil} alt="Profile Icon" className='w-12 inline-block' />
                        )}
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => {
                                if (isActive && !isCartActive) {
                                    toggleCart();
                                }
                                return isActive ? 'text-navActive' : 'text-white hover:text-secondary';
                            }}
                        >
                            <img src={isCartActive ? iconCartActive : iconCart} alt="Cart Icon" className='w-12 inline-block items-center cursor-pointer' />
                            {totalQuantityInCart > 0 && (
                                <span className="bg-red-500 text-md text-white rounded-full w-8 h-8 top-6 text-center absolute ">{totalQuantityInCart}</span>
                            )}
                        </NavLink>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-white text-nt00'>
                            {isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary'/>)}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-nt03 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path, onClick }) => (
                    <React.Fragment key={link}>
                        {onClick ? (
                            <button
                                onClick={onClick}
                                className="text-red-500 hover:text-pr08 focus:outline-none"
                            >
                                {link}
                            </button>
                        ) : (
                            <NavLink
                                to={path}
                                exact={true}
                                className={location.pathname === path ? "text-red-500" : "hover:text-pr08"}
                            >
                                {link}
                            </NavLink>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Navbar;
