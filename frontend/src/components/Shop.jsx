import React, { useState } from 'react';
import Navbar from "../shared/Navbar";
import iconSearch from '../images/icon/iconSearch.png';
import iconSortBy from '../images/icon/iconSortBy.png';
import Copyright from "../shared/Copyright";
import CardProduct2 from "../shared/CardProduct2"; // Mengimpor komponen CardProduct2
import BoxCategories from "../shared/BoxCategories"; // Mengimpor komponen BoxCategories
import imagePopularProduct from '../images/home-image/productPopular.png'; // Mengimpor gambar produk populer
import Banner0 from '../shared/Banner0'; // Mengimpor komponen reusable Banner
import '../style/Shop.css';
import { Link } from 'react-router-dom';

// Mendefinisikan informasi produk
const productInfo = {
    image: imagePopularProduct,
    name: "Samsung S23",
    price: "IDR 12.999K",
};

const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Untuk kesederhanaan, kita menggunakan produk yang sama untuk semua item
    const products = Array.from({ length: 25 }, (_, index) => ({
        id: index + 1,
        ...productInfo,
    }));

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                            className="text-black pl-10 pr-24 py-2 border rounded-3xl w-full text-left"
                        />
                        <img src={iconSearch} alt="Search Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8" />
                    </div>
                    <BoxCategories />
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="relative mb-4 w-full flex justify-end">
                        <button className="bg-white pl-4 text-nt02 font-small text-sm border rounded-3xl flex items-center justify-center">
                            Sort By
                            <img src={iconSortBy} alt="Sort Icon" className="ml-8 w-10 h-10" />
                        </button>
                    </div>
                    
                    <CardProduct2
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        handlePageChange={handlePageChange}
                        products={products}
                    />
                </div>
            </div>

            <Copyright />
        </div>
    );
};

export default Shop;
