import React, { useState, useEffect } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('https://demo.sistemtoko.com/api-view/cart');
                if (!response.ok) {
                    throw new Error('Gagal memuat data keranjang belanja.');
                }
                const data = await response.json();
                if (data.success) {
                    setCartItems(data.data.cartItems);
                    setShippingOptions(data.data.shippingOptions);
                } else {
                    throw new Error('Gagal memuat data keranjang belanja.');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCartData();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Keranjang Belanja</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.productName} - {item.quantity} pcs
                    </li>
                ))}
            </ul>
            <h2>Opsi Pengiriman</h2>
            <select>
                {shippingOptions.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ShoppingCart;
