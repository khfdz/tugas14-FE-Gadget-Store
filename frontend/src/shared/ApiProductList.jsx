// ApiProductList.jsx

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk membuat link navigasi
import { ApiContext } from '../context/ApiContext';

const ApiProductList = () => {
  const [selectedVariants, setSelectedVariants] = useState({});
  const { productsData } = useContext(ApiContext);

  const handleVariantChange = (productId, event) => {
    const selectedVariantId = event.target.value;
    setSelectedVariants({
      ...selectedVariants,
      [productId]: selectedVariantId
    });
  };

  if (!Array.isArray(productsData) || productsData.length === 0) {
    return <div>No products available</div>;
  }

  const addToCart = (productName, selectedVariant) => {
    console.log(`Added ${productName} (${selectedVariant}) to cart`);
    // Additional logic here as needed
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          <div key={product.id} className=" rounded-lg overflow-hidden shadow-md">
            <Link to={`/api-product-detail/${product.id}`}> {/* Link untuk navigasi ke detail produk */}
              <img src={product.photo} alt={product.name} className="w-full h-64 object-cover object-center cursor-pointer" />
            </Link>
            <div className="p-4 ">
              <h2 className="text-center text-xl font-semibold text-white">{product.name}</h2>
              <div className=" mb-4">
                <span className=" text-whitefont-small">{product.price}</span>
              </div>
              <div className="mb-4">
            
          <select
            id={`variant-${product.id}`}
            onChange={handleVariantChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          >
  {/* Opsi varian dari produk parent */}
  {product.plain_varian.map(varian => (
    <option key={varian.id} value={varian.id}>
      {`${varian.value} (${product.stock})`}
    </option>
  ))}
  {/* Opsi varian dari produk child */}
  {product.childs.map(child => (
    <option key={child.plain_varian[0].id} value={child.plain_varian[0].id}>
      {`${child.plain_varian[0].value} (${child.stock})`}
    </option>
  ))}
</select>

              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.name, selectedVariants[product.id])}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiProductList;
