import React, { createContext, useState, useContext } from 'react';

const CardProduct1Context = createContext();

export const CardProduct1Provider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [lastClickedCategory, setLastClickedCategory] = useState('');

    const handleCategoryClick = (category) => {
        if (lastClickedCategory === category) {
            setSelectedCategory(''); 
            setLastClickedCategory('');
        } else {
            setSelectedCategory(category); 
            setLastClickedCategory(category);
        }
    };

    const value = {
        selectedCategory,
        handleCategoryClick,
    };

    return (
        <CardProduct1Context.Provider value={value}>
            {children}
        </CardProduct1Context.Provider>
    );
};

export const useCardProduct1Context = () => useContext(CardProduct1Context);
