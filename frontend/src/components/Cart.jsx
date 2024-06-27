import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import Sponsor from "../shared/Sponsor";
import News from "../shared/News";
import Copyright from "../shared/Copyright";
import { UserContext } from '../../src/context/UserContext';
import cartData from '../../src/DataJson/cart.json';
import { formatPrice } from '../utils';

const Cart = () => {
    const { user } = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartData = () => {
            if (user) {
                const userCart = cartData.filter(item => item.userId === user.id);
                setCartItems(userCart);
            } else {
                setCartItems([]);
            }
        };

        fetchCartData();
    }, [user]);

    const calculateItemSubtotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + calculateItemSubtotal(item), 0);
    };

    const increaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((item, idx) => idx !== index);
        setCartItems(updatedCartItems);
    };

    const shippingCost = cartItems.length > 0 ? 33000 : 0;

    return (
        <div>
            <Navbar />
            <Banner0 title="Shop Cart" breadcrumbs={["Home", "Cart"]} />

            <div className="ml-12 mr-12 mt-20 flex">
                <div className="w-3/4">
                    <div className="bg-nt07 rounded-4xl p-10 KIRI mr-10 text-center">
                        <table className="w-full">
                            <thead className="text-xl">
                                <tr className=''>
                                    <th className="pb-4 text-center">Product</th>
                                    <th className="pb-4 text-center">Detail</th>
                                    <th className="pb-4 text-center">Quantity</th>
                                    <th className="pb-4 text-center">Subtotal</th>
                                    <th className="pb-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="textmdxl">
                                {cartItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border px-4 py-2">
                                            <img src={`../src/images/home-image/product1/${item.image}`} alt={item.name} className="h-full mx-auto" />
                                        </td>
                                        <td className="border px-4 py-2 text-sm">
                                            <p className="font-small ">{item.name}</p>
                                            <p>{item.color}</p>
                                            <p>{item.storage}</p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <div className="flex items-center justify-center">
                                                <button onClick={() => decreaseQuantity(index)} className="bg-colorPrimary1 text-white rounded-full w-6 h-6 text-md font-semibold">-</button>
                                                <p className="mx-4">{item.quantity}</p>
                                                <button onClick={() => increaseQuantity(index)} className="bg-colorPrimary1 text-white rounded-full w-6 h-6 text-md font-semibold">+</button>
                                            </div>
                                        </td>
                                        <td className="border px-4 py-2 text-sm">
                                            <p>{formatPrice(calculateItemSubtotal(item))}</p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleRemoveItem(index)} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-1/4">
                    <div className="KANAN">
                        <div className="bg-nt07 mb-6 rounded-4xl p-3">
                            <p className="text-xl mb-12 font-semibold text-center">Cart Totals</p>
                            <div className="grid grid-cols-2">
                                <div className="text-sm">
                                    <p className="mb-8"> Sub Total </p>
                                    <p className="mb-8">Shipping</p>
                                    <p className="mb-8">Discount</p>
                                    <p className="mb-8">Total</p>
                                </div>
                                <div className="text-sm text-left">
                                    <p className="mb-8">{formatPrice(calculateTotal())}</p>
                                    <p className="mb-8">{formatPrice(shippingCost)}</p>
                                    <p className="mb-8">IDR 0</p>
                                    <p className="">{formatPrice(calculateTotal() + shippingCost)}</p>
                                </div>
                            </div>
                            <button className="btnPrimary w-full h-10 text-sm">Proceed to Check Out</button>
                        </div>
                        <div className="bg-nt07 grid grid-rows-2 p-6 rounded-4xl h-36 gap-4">
                            <input placeholder="Enter Coupon Promo" className="bg-nt09 p-2 text-center h-10 rounded-4xl text-sm"></input>
                            <button className="btnPrimary w-full h-10 text-sm">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Sponsor />
            <News />
            <Copyright />
        </div>
    );
};

export default Cart;
