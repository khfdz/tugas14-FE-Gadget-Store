// import React, { createContext, useState, useContext } from 'react';

// const CardProduct1Context = createContext();

// export const CardProduct1Provider = ({ children }) => {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [lastClickedCategory, setLastClickedCategory] = useState('');

//     const handleCategoryClick = (category) => {
//         if (lastClickedCategory === category) {
//             setSelectedCategory(''); // Hapus kategori jika sudah dipilih dua kali berturut-turut
//             setLastClickedCategory('');
//         } else {
//             setSelectedCategory(category); // Set kategori yang dipilih
//             setLastClickedCategory(category);
//         }
//     };

//     const value = {
//         selectedCategory,
//         handleCategoryClick, // Menggunakan handleCategoryClick langsung sebagai fungsi handleCategoryClick
//     };

//     return (
//         <CardProduct1Context.Provider value={value}>
//             {children}
//         </CardProduct1Context.Provider>
//     );
// };

// export const useCardProduct1Context = () => useContext(CardProduct1Context);

import React, { createContext, useState, useContext } from 'react';

const CardProduct1Context = createContext();

export const CardProduct1Provider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [lastClickedCategory, setLastClickedCategory] = useState('');

    const handleCategoryClick = (category) => {
        if (lastClickedCategory === category) {
            setSelectedCategory(''); // Hapus kategori jika sudah dipilih dua kali berturut-turut
            setLastClickedCategory('');
        } else {
            setSelectedCategory(category); // Set kategori yang dipilih
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
