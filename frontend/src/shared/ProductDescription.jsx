import React, { useState } from 'react';
import { formatPrice } from '../utils';

const ProductDescription = ({
    product,
    totalPrice,
    selectedColor,
    selectedStorage,
    selectedProcessor, // State to track selected processor
    handleColorClick,
    handleStorageClick,
    handleProcessorClick,
    user,
    userId
}) => {
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = () => {
        if (!user || !user.id) {
            alert('You must login first to add items to the cart.');
            return;
        }
    
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image[0], // Assuming you want to use the first image
            color: selectedColor,
            storage: selectedStorage,
            processor: product.specifications.processor ? selectedProcessor : '', // Include selected processor if available
            quantity: quantity,
            subtotal: totalPrice,
            userId: 1 // Replace with actual user ID logic
        };
    
        // Update cartItems state with the new item
        setCartItems([...cartItems, newItem]);
    
        // Optionally, you can reset quantity after adding to cart
        setQuantity(1);
    
        // Inform user that the item has been added to cart (optional)
        alert('Item added to cart!');
    
        // Log the added item to console
        console.log('Added to cart:', newItem);
    };
    

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="ml-10">
            <p className="title text-7xl font-semibold mb-8 mr-24">{product.name}</p>

            <div className="flex items-center mb-8">
                {totalPrice !== product.price && (
                    <p className="price text-5xl font-small mr-4 line-through">{formatPrice(product.price)}</p>
                )}
                <p className="discounted-price text-5xl font-small">{formatPrice(totalPrice)}</p>
            </div>

            <p className="description text-2xl font-small pr-20 tracking-wider leading-relaxed text-justify">
                {product.description}
            </p>

            <div className="grid grid-cols-2">
                <div className="">
                    {product.specifications.colors && product.specifications.colors.title && (
                        <p className="font-small text-5xl mt-8 mb-4">{product.specifications.colors.title}</p>
                    )}
                    <div className="flex gap-6">
                        {product.specifications.colors && product.specifications.colors.items.map((color, index) => (
                            <span
                                key={index}
                                className={`block w-14 h-14 rounded-full cursor-pointer border-4 ${selectedColor === color.colorName ? 'border-colorPrimary1' : 'border-transparent'}`}
                                style={{ backgroundColor: color.colorCode }}
                                onClick={() => handleColorClick(color.colorName)}
                            ></span>
                        ))}
                    </div>
                    {selectedColor && (
                        <p className="mt-4 text-xl">Selected Color: {selectedColor}</p>
                    )}
                </div>
                <div className="">
                    {product.specifications.storage && product.specifications.storage.title && (
                        <p className="font-small text-5xl mt-8 mb-4">{product.specifications.storage.title}</p>
                    )}
                    <div className="flex gap-3 text-2xl">
                        {product.specifications.storage && product.specifications.storage.items.map((storageOption, index) => (
                            <span
                                key={index}
                                className={`block px-4 py-2 bg-nt00 text-black cursor-pointer rounded-xl border-4   ${selectedStorage === storageOption.name ? 'border-colorPrimary1' : 'border-transparent'}`}
                                onClick={() => handleStorageClick(storageOption.name)}
                            >
                                {storageOption.name}
                            </span>
                        ))}
                    </div>
                    {selectedStorage && (
                        <p className="mt-4 text-lg">Selected Storage: {selectedStorage}</p>
                    )}
                </div>
            </div>

            {/* Processor Section */}
            <div className="mt-8">
                {product.specifications.processor && product.specifications.processor.title && (
                    <p className="font-small text-5xl mt-8 mb-4">{product.specifications.processor.title}</p>
                )}
                <div className=" text-2xl">
                    {product.specifications.processor && product.specifications.processor.items.map((processorOption, index) => (
                        <span
                            key={index}
                            className={`block px-4 py-2 bg-nt00 text-black cursor-pointer rounded-xl border-4 mt-4 mr-24 ${selectedProcessor === processorOption.name ? 'border-colorPrimary1' : 'border-transparent'}`}
                            onClick={() => handleProcessorClick(processorOption.name)}
                        >
                            {processorOption.name} 
                        </span>
                    ))}
                </div>
                {selectedProcessor && (
                    <p className="mt-4 text-lg">Selected Processor: {selectedProcessor}</p>
                )}
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex grid grid-cols-2 mb-12 mt-8">
                <label className="flex items-center bg-nt00 rounded-full w-80 h-20 justify-between text-3xl">
                    <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-20 h-20 text-6xl" onClick={decreaseQuantity}>-</button>
                    <p className="text-black">{quantity}</p>
                    <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-20 h-20 text-5xl" onClick={increaseQuantity}>+</button>
                </label>
                <button className="px-4 py-2 bg-colorPrimary1 rounded-3xl text-3xl text-white rounded mr-20" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDescription;
