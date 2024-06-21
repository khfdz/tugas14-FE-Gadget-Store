import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../DataJson/product.json';
import reviewData from '../../src/DataJson/review.json';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

// Function to format price
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
        // Menghitung total bintang untuk setiap productId
        const starsCount = {};

        reviewData.reviews.forEach(review => {
            if (starsCount[review.productId]) {
                starsCount[review.productId] += review.stars;
            } else {
                starsCount[review.productId] = review.stars;
            }
        });

        // Filter produk yang memiliki total 20 bintang atau lebih, lalu urutkan berdasarkan total bintang terbanyak
        const popularProductsFiltered = productData.products
            .filter(product => {
                const totalStars = starsCount[product.id] || 0;
                return totalStars >= 20;
            })
            .sort((a, b) => {
                const totalStarsA = starsCount[a.id] || 0;
                const totalStarsB = starsCount[b.id] || 0;
                return totalStarsB - totalStarsA; // Urutkan dari terbanyak ke terendah
            })
            .slice(0, 7) // Ambil 7 produk paling populer
            .map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image[0] // Ambil gambar pertama dari array image
            }));

        setPopularProducts(popularProductsFiltered);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 ml-24 items-center mt-14 mb-14 mr-24">
            <div className="">
                <p className="font-semibold text-7xl mb-8">Popular <br/> Products</p>
                <p className='text-4xl font mb-8'>Up to 30% Discount</p>
                <Link to="/shop" onClick={handleSortByClick}>
                <button className="btnPrimary w-72 h-16 mt-4 text-4xl rounded-5xl">View More</button>
                </Link>
            </div>

            {popularProducts.map((product, index) => (
                <div key={index} className="bg-nt09 p-4 rounded-3xl pt-0 flex flex-col items-center h-full">
                    <Link to={`/detail/${product.id}`}>
                        <img src={`src/images/home-image/product1/${product.image}`} alt={product.name} className="w-80 mt-12 mb-10" />
                    </Link>
                    <p className="text-center mb-4 text-3xl font-semibold">{product.name}</p>
                    <p className="text-center mb-4 text-2xl">{formatPrice(product.price)}</p>
                </div>
            ))}
        </div>
    );
};

export default PopularProduct;
