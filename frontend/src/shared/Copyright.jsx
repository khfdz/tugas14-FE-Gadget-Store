import React from 'react';
import iconWa from '../images/icon/iconWa.png'
import iconIg from '../images/icon/iconIg.png'
import iconFb from '../images/icon/iconFb.png'

const Copyright = () => {
    return (
        <div className=" px-4 py-12 bg-nt09">
            <div className="flex space-x-80 items-start  ml-20">
                <div className="flex flex-col space-y-1 ">
                    <p className="font-bold text-3xl mb-4">Gadget Store</p>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Donec pellentesque lacinia <br/> est.</p>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-bold text-3xl mb-4">Quick Link</p>
                    <div className='text-xl font-small'>
                    <p className=''>Home</p>
                    <p className=''>Shop</p>
                    <p className=''>About</p>
                    <p className=''>Contact</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-bold text-3xl mb-4">Custom Area</p>
                    <div className='text-xl font-small'>
                    <p>My Account</p>
                    <p>Tracking</p>
                    <p>Order</p>
                    <p>My Cart</p>
                    </div>
                </div>
            </div>
            <div className="flex  mt-4 space-x-4 ml-20 mb-4">
                <img src={iconWa} alt="Whatsapp" className="w-16" />
                <img src={iconIg} alt="Instagram" className="w-16" />
                <img src={iconFb} alt="Facebook" className="w-16" />
            </div>
            <div className="flex text-xl mt-10 ml-20 flex-col">
                <p>&#169; 2022 GadgetStore Copyright Permission</p>
                <p>&#169; 2024 @khfdz</p>
            </div>
        </div>
    );
}

export default Copyright;
