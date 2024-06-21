import React, { useState, useRef, useEffect } from 'react';
import Navbar from "../shared/Navbar";
import iconSearch from '../images/icon/iconSearch.png';
import iconSortBy from '../images/icon/iconSortBy.png';
import Copyright from "../shared/Copyright";
import CardProduct2 from "../shared/CardProduct2";
import BoxCategories from "../shared/BoxCategories";
import Banner0 from '../shared/Banner0';
import '../style/Shop.css';
import { Link } from 'react-router-dom';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const [showSortOptions, setShowSortOptions] = useState(false);

    const {
        searchTerm,
        setSearchTerm,
        selectedCategories,
        selectedBrands,
        minPrice,
        maxPrice,
        sortBy,
        setSortBy,
        filterProducts,
    } = useBoxCategoriesContext();

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSortByClick = () => {
        setShowSortOptions(!showSortOptions);
    };

    const handleSortOptionClick = (option) => {
        setSortBy(option);
        setShowSortOptions(false);
    };

    const sortOptionsRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (sortOptionsRef.current && !sortOptionsRef.current.contains(event.target)) {
    //             setShowSortOptions(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    // Fungsi untuk mendapatkan teks yang sesuai dengan nilai sortBy
    const getSortByText = () => {
        switch (sortBy) {
            case '':
                return 'Sort By';
            case 'priceAsc':
                return 'Price: Low to High';
            case 'priceDesc':
                return 'Price: High to Low';
            case 'popular':
                return 'Popular';
            default:
                return 'Sort By';
        }
    };

    return (
        <div>
            <Navbar />
            <Banner0 title="Products" breadcrumbs={['Home', 'Shop']} />

            <div className="flex justify-between mx-14 my-8">
                <div>
                    <div className="relative mb-4">
                        <input
                            placeholder="Search Product"
                            className="text-black pl-10 pr-24 py-2 border text-2xl rounded-3xl w-full h-14 text-left"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <img src={iconSearch} alt="Search Icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 cursor-pointer" />
                    </div>
                    <BoxCategories/>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="relative mb-4 w-full flex justify-end " ref={sortOptionsRef}>
                        <button
                            className="bg-white w-72 h-14 text-left text-black font-small text-2xl border rounded-3xl flex items-center pl-4 "
                            onClick={handleSortByClick}
                        >
                            {getSortByText()}
                            <img src={iconSortBy} alt="Sort Icon" className="ml-2 w-18 right-2 absolute" />
                        </button>
                        {showSortOptions && (
                            <div className="z-10 absolute right-0 mt-16 w-72 bg-white text-nt02 text-2xl  border rounded-3xl shadow-lg">
                                <button
                                    className={`block w-full px-4 py-2 text-left rounded-t-3xl  hover:bg-gray-200 ${sortBy === '' ? 'bg-gray-200' : ''}`}
                                    onClick={() => handleSortOptionClick('')}
                                >
                                    Default
                                </button>
                                <button
                                    className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${sortBy === 'priceAsc' ? 'bg-gray-200' : ''}`}
                                    onClick={() => handleSortOptionClick('priceAsc')}
                                >
                                    Price: Low to High
                                </button>
                                <button
                                    className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${sortBy === 'priceDesc' ? 'bg-gray-200' : ''}`}
                                    onClick={() => handleSortOptionClick('priceDesc')}
                                >
                                    Price: High to Low
                                </button>
                                <button
                                    className={`block w-full px-4 py-2 text-left rounded-b-3xl hover:bg-gray-200 ${sortBy === 'Popular' ? 'bg-gray-200' : ''}`}
                                    onClick={() => handleSortOptionClick('popular')}
                                >
                                    Popular
                                </button>
                                {/* Tambah opsi sorting lainnya jika diperlukan */}
                            </div>
                        )}
                    </div>

                    <CardProduct2
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        handlePageChange={handlePageChange}
                        searchTerm={searchTerm}
                        selectedCategories={selectedCategories}
                        selectedBrands={selectedBrands}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        sortBy={sortBy}
                    />
                </div>
            </div>

            <Copyright />
        </div>
    );
};

export default Shop;
