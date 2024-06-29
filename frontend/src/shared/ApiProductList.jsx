import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const ApiProductList = () => {
  const [selectedVariants, setSelectedVariants] = useState({});
  const { productsData, setPage, page } = useContext(ApiContext);

  const handleVariantChange = (productId, event) => {
    const selectedVariantId = event.target.value;
    setSelectedVariants({
      ...selectedVariants,
      [productId]: selectedVariantId
    });
  };

  const loadMoreProducts = () => {
    setPage(page + 1); 
  };

  if (!Array.isArray(productsData) || productsData.length === 0) {
    return <div>No products available</div>;
  }

  const addToCart = (productName, selectedVariant) => {
    console.log(`Added ${productName} (${selectedVariant}) to cart`);
   
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mr-4 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          <div key={product.id} className="overflow-hidden shadow-md">
            <Link to={`/api-product-detail/${product.id}`}>
              <img src={product.photo} alt={product.name} className="w-full object-cover object-center cursor-pointer mb-4" />
            </Link>

            <div className='flex flex-col items-center'>
              <p className="text-center text-xl font-semibold text-white">{product.name}</p>
              <p className="flex text-whitefont-small text-center ">Rp. {product.price}</p>
              
              <select
                id={`variant-${product.id}`}
                onChange={(event) => handleVariantChange(product.id, event)}
                className="mt-2 mb-2 block py-2 px-3 bg-white rounded-md text-black text-sm"
              >
                {product.plain_varian.map(varian => (
                  <option key={varian.id} value={varian.id}>
                    {`${varian.value} (${product.stock})`}
                  </option>
                ))}
                {product.childs.map(child => (
                  <option key={child.plain_varian[0].id} value={child.plain_varian[0].id}>
                    {`${child.plain_varian[0].value} (${child.stock})`}
                  </option>
                ))}
              </select>
              
              <button
                className="text-md bg-black hover:bg-colorsHijja1 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => addToCart(product.name, selectedVariants[product.id])}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <button
          className="bg-colorsHijja1 hover:bg-black text-white font-bold py-2 px-4 rounded-3xl w-1/5 mt-4"
          onClick={loadMoreProducts}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ApiProductList;
