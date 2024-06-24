import React, { useState } from 'react';
import { formatPrice } from '../utils';

const ProductDescription = ({
    product,
    totalPrice,
    selectedColor,
    selectedStorage,
    selectedProcessor, 
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
            image: product.image[0], 
            color: selectedColor,
            storage: selectedStorage,
            processor: product.specifications.processor ? selectedProcessor : '', 
            quantity: quantity,
            subtotal: totalPrice,
            userId: 1        };
    
        setCartItems([...cartItems, newItem]);
    
        setQuantity(1);
        alert('Item added to cart!');
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
        <div className="mb-8">
            <p className="title text-2xl font-bold mb-2 ">{product.name}</p>

            <div className="flex items-center mb-2">
                {totalPrice !== product.price && (
                    <p className="price text-xl font-small mr-4 line-through">{formatPrice(product.price)}</p>
                )}
                <p className="discounted-price text-xl font-small">{formatPrice(totalPrice)}</p>
            </div>

            <p className="description text-md font-small pr-12 tracking-wider leading-relaxed text-justify">
                {product.description}
            </p>

            <div className="grid grid-cols-2">
                <div className="">
                    {product.specifications.colors && product.specifications.colors.title && (
                        <p className="font-bold text-2xl mt-2 ">{product.specifications.colors.title}</p>
                    )}
                    <div className="flex gap-2">
                        {product.specifications.colors && product.specifications.colors.items.map((color, index) => (
                            <span
                                key={index}
                                className={`block w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color.colorName ? 'border-colorPrimary1' : 'border-transparent'}`}
                                style={{ backgroundColor: color.colorCode }}
                                onClick={() => handleColorClick(color.colorName)}
                            ></span>
                        ))}
                    </div>
                    {selectedColor && (
                        <p className="mt-2 text-sm">Selected Color: {selectedColor}</p>
                    )}
                </div>
                <div className="">
                    {product.specifications.storage && product.specifications.storage.title && (
                        <p className="font-bold text-2xl  mt-2">{product.specifications.storage.title}</p>
                    )}
                    <div className="flex gap-1 text-sm mr-12 mt-1">
                        {product.specifications.storage && product.specifications.storage.items.map((storageOption, index) => (
                            <span
                                key={index}
                                className={`block  bg-nt00 text-black  cursor-pointer rounded-md border-2 w-16 h-7 flex justify-center items-center   ${selectedStorage === storageOption.name ? 'border-colorPrimary1' : 'border-transparent'}`}
                                onClick={() => handleStorageClick(storageOption.name)}
                            >
                                {storageOption.name}
                            </span>
                        ))}
                    </div>
                    {selectedStorage && (
                        <p className="mt-2 text-sm">Selected Storage: {selectedStorage}</p>
                    )}
                </div>
            </div>

            {/* Processor Section */}
            <div className="">
                {product.specifications.processor && product.specifications.processor.title && (
                    <p className=" text-2xl font-bold mt-2">{product.specifications.processor.title}</p>
                )}
                <div className=" text-sm">
                    {product.specifications.processor && product.specifications.processor.items.map((processorOption, index) => (
                        <span
                            key={index}
                            className={`block px-4 bg-nt00 text-black cursor-pointer rounded-xl border-4 mt-2 mr-20 ${selectedProcessor === processorOption.name ? 'border-colorPrimary1' : 'border-transparent'}`}
                            onClick={() => handleProcessorClick(processorOption.name)}
                        >
                            {processorOption.name} 
                        </span>
                    ))}
                </div>
                {selectedProcessor && (
                    <p className="mt-2 text-sm">Selected Processor: {selectedProcessor}</p>
                )}
            </div>

            {/* Quantity Selector */}
            <div className="flex grid grid-cols-2 mt-4 gap-24">
                <label className=" flex items-center bg-nt00 rounded-full w-full  h-10 justify-between text-xl">
                    <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-10 h-10 text-2xl" onClick={decreaseQuantity}>-</button>
                    <p className="text-black">{quantity}</p>
                    <button className="flex items-center justify-center bg-colorPrimary1 rounded-full  w-10 h-10 " onClick={increaseQuantity}>+</button>
                </label>
                <button className="bg-colorPrimary1 w-50 mr-12 rounded-2xl text-md text-white " onClick={handleAddToCart}>Add to Cart</button>
            </div>
            
        </div>
        
    );
};

export default ProductDescription;
