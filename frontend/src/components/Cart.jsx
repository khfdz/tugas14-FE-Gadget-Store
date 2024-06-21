import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import Sponsor from "../shared/Sponsor";
import News from "../shared/News";
import Copyright from "../shared/Copyright";
import { UserContext } from '../../src/context/UserContext'; // Import UserContext
import cartData from '../../src/DataJson/cart.json'; // Import data from cartData.json
import { formatPrice } from '../utils'; // Import formatPrice function

const Cart = () => {
    const { user } = useContext(UserContext); // Menggunakan UserContext untuk mendapatkan user yang sedang login
    const [cartItems, setCartItems] = useState([]); // State untuk menyimpan item keranjang

    // Mengambil data keranjang berdasarkan userId
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

    // Menghitung subtotal dari suatu item
    const calculateItemSubtotal = (item) => {
        return item.price * item.quantity;
    };

    // Menghitung total harga belanja
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + calculateItemSubtotal(item), 0);
    };

    // Handle penambahan jumlah barang
    const increaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    };

    // Handle pengurangan jumlah barang
    const decreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };

    // Handle penghapusan item dari keranjang
    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((item, idx) => idx !== index);
        setCartItems(updatedCartItems);
    };

    return (
        <div>
            <Navbar />
            <Banner0 title="Shop Cart" breadcrumbs={["Home", "Cart"]} />

            <div className="ml-12 mr-12 mt-20 flex">
                {/* Bagian Kiri */}
                <div className="w-3/4">
                    <div className="bg-nt07 rounded-4xl p-10 KIRI mr-10 text-center">
                        {/* Tabel untuk Detail Produk, Quantity, dan Subtotal */}
                        <table className="w-full">
                            <thead className="text-4xl">
                                <tr className=''>
                                    <th className="pb-4 text-center">Product</th>
                                    <th className="pb-4 text-center">Detail</th>
                                    <th className="pb-4 text-center">Quantity</th>
                                    <th className="pb-4 text-center">Subtotal</th>
                                    <th className="pb-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-3xl">
                                {cartItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border px-4 py-2">
                                            <img src={`../src/images/home-image/product1/${item.image}`} alt={item.name} className="w-[300px] mx-auto" />
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="font-semibold">{item.name}</p>
                                            <p>{item.color}</p>
                                            <p>{item.storage}</p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <div className="flex items-center justify-center">
                                                <button onClick={() => decreaseQuantity(index)} className="bg-colorPrimary1 text-white rounded-full w-12 h-12 text-3xl font-semibold">-</button>
                                                <p className="mx-4">{item.quantity}</p>
                                                <button onClick={() => increaseQuantity(index)} className="bg-colorPrimary1 text-white rounded-full w-12 h-12 text-3xl font-semibold">+</button>
                                            </div>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p>{formatPrice(calculateItemSubtotal(item))}</p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleRemoveItem(index)} className="bg-red-600 text-white px-4 py-2 rounded-lg">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="w-1/4">
                    <div className="KANAN">
                        <div className="bg-nt07 mb-6 rounded-4xl p-8">
                            <p className="text-3xl mb-12 font-semibold">Cart Totals</p>
                            <div className="grid grid-cols-2">
                                <div className="text-2xl">
                                    <p className="mb-8"> Sub Total </p>
                                    <p className="mb-8">Shipping</p>
                                    <p className="mb-8">Discount</p>
                                    <p className="mb-8">Total</p>
                                </div>
                                <div className="text-2xl text-left">
                                    <p className="mb-8">{formatPrice(calculateTotal())}</p>
                                    <p className="mb-8">{formatPrice(33000)}</p>
                                    <p className="mb-8">
                                    IDR 0
                                    </p>
                                    <p className="mb-8">{formatPrice(calculateTotal() + 33000)}</p>
                                </div>
                            </div>
                            <button className="btnPrimary w-full h-16 text-3xl">Proceed to Check Out</button>
                        </div>
                        <div className="bg-nt07 grid grid-rows-2 p-6 rounded-4xl">
                            <input placeholder="Enter Coupon Promo" className="bg-nt09 p-2 text-center h-20 rounded-4xl mb-6 mt-8 text-3xl"></input>
                            <button className="btnPrimary w-full h-[80px] text-3xl">Submit</button>
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
