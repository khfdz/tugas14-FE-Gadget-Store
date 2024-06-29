import React, { createContext, useState, useContext } from 'react';

const BoxCategoriesContext = createContext();

export const BoxCategoriesProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');

    const filterProducts = (products) => {
        return products.filter(product => {
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                return false;
            }
            if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
                return false;
            }
            const productPrice = parseFloat(product.price);
            if ((minPrice && productPrice < parseFloat(minPrice)) || (maxPrice && productPrice > parseFloat(maxPrice))) {
                return false;
            }
            return true;
        });
    };

    const value = {
        searchTerm,
        setSearchTerm,
        selectedCategories,
        setSelectedCategories,
        selectedBrands,
        setSelectedBrands,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        filterProducts,
    };

    return (
        <BoxCategoriesContext.Provider value={value}>
            {children}
        </BoxCategoriesContext.Provider>
    );
};

export const useBoxCategoriesContext = () => useContext(BoxCategoriesContext);
