import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../DataJson/product.json';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

// Definisikan fungsi formatPrice di sini
function formatPrice(price) {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${formattedPrice.replace(".000", "")}K`;
}

const RelatedProduct = ({ brand, productId, category }) => {
    const { setSelectedCategories, setSelectedBrands } = useBoxCategoriesContext();

    // Filter produk berdasarkan brand dan id != productId
    const relatedProducts = productsData.products.filter(product => product.brand === brand && product.id !== parseInt(productId) && product.category === category);

    const handleViewMoreClick = () => {
        setSelectedCategories([category]);
        setSelectedBrands([brand]);
    };

    return (
        <div className="grid grid-cols-4 gap-6 ml-24 items-center mt-14 mb-14 mr-24">
            <div className="">
                <p className="font-semibold text-6xl">Related <br/> Products</p>
                <Link to ="/shop" onClick={handleViewMoreClick}>
                <button className='btnPrimary w-72 h-16 mt-4 text-3xl rounded-5xl'>View More</button>
                </Link>
              
            </div>

            {relatedProducts.slice(0, 3).map((product, index) => (
                <div key={index} className="bg-nt09 p-4 rounded-3xl pt-0 flex flex-col items-center">
                    <Link to={`/detail/${product.id}`}>
                        <img src={`/src/images/home-image/product1/${product.image[0]}`} alt="Product" className="w-80 mt-12 mb-10" />
                    </Link>
                    <p className="text-center mb-4 text-3xl font-semibold">{product.name}</p>
                    <p className="text-center mb-4 text-2xl">{formatPrice(product.price)}</p>
                </div>
            ))}
        </div>
    );
};

export default RelatedProduct;
