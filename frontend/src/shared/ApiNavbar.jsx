import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import HijjaLogo from '../../public/images/home-image/hijja.png';

const ApiNavbar = () => {
  const { pagesData, categoriesData, searchName, setSearchName } = useContext(ApiContext);
  const [showPages, setShowPages] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const togglePages = () => {
    setShowPages(!showPages);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  useEffect(() => {
    setSearchName(searchInput.trim()); // Update pencarian berdasarkan input
  }, [searchInput, setSearchName]);

  return (
    <nav className="shadow-lg mt-1 mb-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left part of the navbar */}
          <div className="flex-shrink-0">
            <img className="w-44 " src={HijjaLogo} alt="Hijja Logo" />
          </div>

          {/* Center part of the navbar */}
          <div className="flex-1 flex justify-center sm:justify-start grid grid-row-2 mt-2 ml-4">
            <p className='huruf pb-2'>
              Hijja Indonesia
            </p>
            
            <hr/>
            <div className="flex space-x-14 mb-2">
              <Link to="/api" className="nav-link">Home</Link>
            
              <button onClick={toggleCategories} className="nav-link">Brand</button>
              <button onClick={togglePages} className="nav-link">Information</button>
              <Link to="/api-blog" className="nav-link">Blog</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              className="text-black"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />


            <button className="nav-link">Cart</button>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {showCategories && (
        <div className="absolute w-48 bg-white shadow-lg ml-64 ">
          <div className="py-1">
            {categoriesData.length > 0 ? (
              categoriesData.map((category) => (
                <Link
                  key={category.product_category_id}
                  to={`/api-categories/${category.product_category_id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {category.product_category_name}
                </Link>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-700">Loading...</div>
            )}
          </div>
        </div>
      )}

      {/* Dropdown menu */}
      {showPages && (
        <div className="absolute w-48 bg-white shadow-lg ml-96">
          <div className="py-1">
            {pagesData.length > 0 ? (
              pagesData.map((page) => (
                <Link
                  key={page.page_id}
                  to={`/api-Information/${page.page_slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {page.page_title}
                </Link>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-700">Loading...</div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ApiNavbar;
