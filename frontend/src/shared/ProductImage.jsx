// shared/ProductImage.jsx

import React from 'react';

const ProductImage = ({ selectedImage, imagesToShow, handleClickImage }) => {
    return (
        <div className='grid grid-rows-2 mr-20'>
            <div className='flex justify-center '>
                <img src={`/src/images/home-image/product1/${selectedImage}`} alt="Popular Product" className="justify-center items-center mb-10 " />
            </div>
            <div className="grid grid-cols-3">
                {imagesToShow.map((img, index) => (
                    <img
                        key={index}
                        src={`/src/images/home-image/product1/${img}`}
                        alt="Popular Product"
                        className={`cursor-pointer ${img === selectedImage ? 'hidden' : ''}`}
                        onClick={() => handleClickImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImage;
