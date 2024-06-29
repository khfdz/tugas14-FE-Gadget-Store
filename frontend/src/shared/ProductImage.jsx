import React from 'react';

const ProductImage = ({ selectedImage, imagesToShow, handleClickImage }) => {
    return (
        <div className='grid grid-rows-2 mr-12'>
            <div className='flex justify-center '>
                <img src={`/images/home-image/product1/${selectedImage}`} alt="Popular Product" className="justify-center items-center mb-10 lg:h-[250px] " />
            </div>
            <div className="grid grid-cols-3 ">
                {imagesToShow.map((img, index) => (
                    <img
                        key={index}
                        src={`/images/home-image/product1/${img}`}
                        alt="Popular Product"
                        className=  {`cursor-pointer w-full ${img === selectedImage ? 'hidden' : ''}`}
                        onClick={() => handleClickImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImage;
