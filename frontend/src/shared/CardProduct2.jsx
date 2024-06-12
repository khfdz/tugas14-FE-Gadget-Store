import React from 'react';
import imagePopularProduct from '../images/home-image/productPopular.png';
import { Link } from 'react-router-dom';

const CardProduct2 = ({ currentPage, itemsPerPage, handlePageChange, products }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div>
            <Link to="/detail">
            <div className="grid grid-cols-3 gap-6 ml-24">
                {currentItems.map(({ id, name, price, image }) => (
                    <div key={id} className="bg-nt09 rounded-4xl p-1 shadow-lg text-center">
                        <img src={image} alt="Popular Product" className="mx-auto mb" />
                        <h2 className="font-semibold mb-2 pb-2">{name}</h2>
                        <p className="text-lg font-bold pb-4">{price}</p>
                    </div>
                ))}
            </div>
            </Link>

            
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1  rounded-xl w-12 h-12 mt-4 ${
                            currentPage === index + 1 ? 'bg-colorPrimary1 text-white' : 'bg-nt07 text-white'
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            
        </div>
    );
};

export default CardProduct2;
