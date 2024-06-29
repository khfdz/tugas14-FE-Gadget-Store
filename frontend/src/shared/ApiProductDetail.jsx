import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import ApiNavbar from './ApiNavbar';
import ApiFooter from './ApiFooter';

const ApiProductDetail = () => {
  const { id } = useParams(); 
  const { productsData } = useContext(ApiContext);

  const [selectedVariant, setSelectedVariant] = useState(null); 
  const [product, setProduct] = useState(null); 

   useEffect(() => {
    if (productsData) {
      const foundProduct = productsData.find(product => product.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setProduct(null);
      }
    }
  }, [id, productsData]);

   const handleVariantSelect = (variantId) => {
    if (product) {
      const selectedVariantData = product.childs.find(child => child.plain_varian[0].id === parseInt(variantId));
      setSelectedVariant(selectedVariantData);
    }
  };

   if (!productsData || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <ApiNavbar />
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="grid grid-cols-2">
      <div className="p-4 grid grid-rows-2 gap-4">

            <div>
            <img src={product.photo} alt={product.name} className="w-full h-auto" />
            </div>

            <div className='space-between flex gap-8'>
            <img src={product.photo} alt={product.name} className="h-32 " />
            <img src={product.photo} alt={product.name} className="h-32" />
            <img src={product.photo} alt={product.name} className="h-32" />
            </div>



          </div>
          
          <div>

          <div className={`p-4 ${selectedVariant ? 'hidden' : 'block'}`}>
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-700 mb-2">Price: {product.price}</p>
            <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
          </div>
          
          {selectedVariant && (
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{selectedVariant.name}</h3>
              <p className="text-gray-700 mb-2">Price: {selectedVariant.price}</p>
              <p className="text-gray-700 mb-2">Stock: {selectedVariant.stock}</p>
              <p className="text-gray-700 mb-4">{selectedVariant.description}</p>
              
            </div>
          )}

          <div className="mb-4">
            <label htmlFor={`variant-${product.id}`} className="block text-sm font-medium text-gray-700">Select Variant:</label>
            <div className="grid grid-cols-2 gap-2">
  
              {product.plain_varian.map(varian => (
                <button
                  key={varian.id}
                  onClick={() => handleVariantSelect(varian.id)}
                  className={`py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${selectedVariant && selectedVariant.plain_varian[0].id === varian.id ? 'bg-indigo-500 text-white hover:bg-indigo-700' : 'hover:bg-gray-200'}`}
                >
                  {`${varian.value}`}
                </button>
              ))}

              {product.childs.map(child => (
                <button
                  key={child.plain_varian[0].id}
                  onClick={() => handleVariantSelect(child.plain_varian[0].id)}
                  className={`py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${selectedVariant && selectedVariant.plain_varian[0].id === child.plain_varian[0].id ? 'bg-indigo-500 text-white hover:bg-indigo-700' : 'hover:bg-gray-200'}`}
                >
                  {`${child.plain_varian[0].value} `}
                </button>
              ))}
            </div>
            </div>
          </div>
 
      </div>
    </div>
    <ApiFooter />
        </div>
  );
};

export default ApiProductDetail;
