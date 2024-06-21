// shared/ProductSpecifications.jsx

import React from 'react';

const ProductSpecifications = ({ product }) => {
    return (
        <div>
            <div>
                <p className="titleSpec font-semibold text-4xl mb-4">Specification</p>
                <p className="descSpec text-2xl font-small pr-20 tracking-wider leading-relaxed text-justify">
                    {product.specifications.descriptionSpec}
                </p>
            </div>
        </div>
    );
};

export default ProductSpecifications;
