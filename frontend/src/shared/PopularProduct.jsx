import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../DataJson/product.json';
import reviewData from '../../src/DataJson/review.json';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

function formatPrice(price) {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${formattedPrice.replace(".000", "")}K`;
}

const PopularProduct = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const { setSortBy } = useBoxCategoriesContext();

    const handleSortByClick = () => {
        setSortBy('popular');
    };
    

    useEffect(() => {
        const starsCount = {};

        reviewData.reviews.forEach(review => {
            if (starsCount[review.productId]) {
                starsCount[review.productId] += review.stars;
            } else {
                starsCount[review.productId] = review.stars;
            }
        });

        const popularProductsFiltered = productData.products
            .filter(product => {
                const totalStars = starsCount[product.id] || 0;
                return totalStars >= 20;
            })
            .sort((a, b) => {
                const totalStarsA = starsCount[a.id] || 0;
                const totalStarsB = starsCount[b.id] || 0;
                return totalStarsB - totalStarsA;
            })
            .slice(0, 7) 
            .map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image[0] 
            }));

        setPopularProducts(popularProductsFiltered);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 ml-24 items-center mt-14 mb-14 mr-24">
            <div className="">
                <p className="font-semibold text-4xl mb-8">Popular <br/> Products</p>
                <p className='text-xl font mb-8'>Up to 30% Discount</p>
                <Link to="/shop" onClick={handleSortByClick}>
                <button className="btnPrimary text-xl rounded-5xl">View More</button>
                </Link>
            </div>

            {popularProducts.map((product, index) => (
                <div key={index} className="bg-nt09 p-4 rounded-3xl pt-0 flex flex-col items-center h-full">
                    <Link to={`/detail/${product.id}`}>
                        <img src={`images/home-image/product1/${product.image}`} alt={product.name} className="mt-4 mb-2" />
                    </Link>
                    <p className="text-center mb-4 mt-2 text-xl font-bold">{product.name}</p>
                    <p className="text-center mb-4 text-md">{formatPrice(product.price)}</p>
                </div>
            ))}
        </div>
    );
};

export default PopularProduct;
