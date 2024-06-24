// shared/ProductSpecifications.jsx

import React from 'react';

const ProductSpecifications = ({ product }) => {
    return (
        <div className=''> 
            <div>
                <p className="titleSpec font-semibold text-2xl font-bold mb-4">Specification</p>
                <p className="text-md font-small  leading-relaxed text-justify">
                    {product.specifications.descriptionSpec}
                </p>
            </div>
        </div>
    );
};

export default ProductSpecifications;
