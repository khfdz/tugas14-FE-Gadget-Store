import React from 'react';
import { Link } from 'react-router-dom';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';
import productsData from '../DataJson/product.json';
import reviewData from '../DataJson/review.json'; 

function formatPrice(price) {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${formattedPrice.replace(".000", "")}K`;
}

const CardProduct2 = ({ currentPage, itemsPerPage, handlePageChange, searchTerm, selectedCategories, selectedBrands, minPrice, maxPrice, sortBy }) => {
    const { filterProducts } = useBoxCategoriesContext();

    const calculateTotalStars = (productId) => {
        const reviews = reviewData.reviews.filter(review => review.productId === productId);
        return reviews.reduce((totalStars, review) => totalStars + review.stars, 0);
    };

   const filteredProducts = filterProducts(productsData.products);

    if (sortBy === 'priceAsc') {
        filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'priceDesc') {
        filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'popular') {
        filteredProducts.sort((a, b) => {
            const totalStarsA = calculateTotalStars(a.id);
            const totalStarsB = calculateTotalStars(b.id);
            return totalStarsB - totalStarsA; 
        });
    }

    let filteredItems = filteredProducts.filter(product => {
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
            return false;
        }
        // Filter by price range
        if (minPrice && parseFloat(product.price) < minPrice) {
            return false;
        }
        if (maxPrice && parseFloat(product.price) > maxPrice) {
            return false;
        }
        return true;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div>
        <div className="grid grid-cols-3 gap-6 ml-8">
            {currentItems.map(({ id, name, price, image }) => (
                <div key={id} className="bg-nt09 rounded-3xl p-1 shadow-lg text-center grid grid-row-2">
                    <Link to={`/detail/${id}`}>

                        <div className="flex lg:w-[200px] h-[200px]  items-center justify-center  mb-4"> {/* Fixed height for the image container */}
                            <img src={`images/home-image/product1/${image[0]}`} alt="Product" className="mt-4  items-center justify-center " />
                        </div>

                        <div className="h-18  "> {/* Fixed height for the text container */}
                            <h2 className="font-semibold text-md ">{name}</h2>
                            <p className="text-sm mb-2">{formatPrice(price)}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    
        <div className="flex justify-center mt-4 text-xl">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`mx-1 px-3 py-1 rounded-xl w-10 h-10 mt-4 text-sm ${
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
