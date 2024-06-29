import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../DataJson/product.json';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

function formatPrice(price) {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${formattedPrice.replace(".000", "")}K`;
}

const RelatedProduct = ({ brand, productId, category }) => {
    const { setSelectedCategories, setSelectedBrands } = useBoxCategoriesContext();

    const relatedProducts = productsData.products.filter(product => product.brand === brand && product.id !== parseInt(productId) && product.category === category);

    const handleViewMoreClick = () => {
        setSelectedCategories([category]);
        setSelectedBrands([brand]);
    };

    return (
        <div className="grid grid-cols-4 gap-4 ml-24 items-center mt-14 mb-14 mr-20">
            <div className="">
                <p className="font-semibold text-4xl">Related <br/> Products</p>
                <Link to ="/shop" onClick={handleViewMoreClick}>
                <button className='btnPrimary text-xl rounded-5xl mt-4'>View More</button>
                </Link>
              
            </div>

            {relatedProducts.slice(0, 3).map((product, index) => (
                <div key={index} className="bg-nt09 p-4 rounded-3xl pt-0 flex flex-col items-center h-full">
                    <Link to={`/detail/${product.id}`}>
                        <img src={`/images/home-image/product1/${product.image[0]}`} alt="Product" className=" mt-6 mb-2" />
                    </Link>
                    <p className="text-center mb-4 text-xl font-bold">{product.name}</p>
                    <p className="text-center mb-4 text-md">{formatPrice(product.price)}</p>
                </div>
            ))}
        </div>
    );
};

export default RelatedProduct;
