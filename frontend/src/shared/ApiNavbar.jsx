import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import HijjaLogo from '../../public/images/home-image/hijja.png';

const ApiNavbar = () => {
  const { pagesData, categoriesData, searchName, setSearchName } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showPages, setShowPages] = useState(false);

  useEffect(() => {
    setSearchName(searchInput.trim());
  }, [searchInput, setSearchName]);

  const handleCategoriesMouseEnter = () => {
    setShowCategories(true);
  };

  const handleCategoriesMouseLeave = () => {
    setShowCategories(false);
  };

  const handlePagesMouseEnter = () => {
    setShowPages(true);
  };

  const handlePagesMouseLeave = () => {
    setShowPages(false);
  };

  return (
    <nav className="shadow-lg mt-1 mb-4 mr-4 ml-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <div className="relative flex items-center justify-between h-16">
          {/* Left part of the navbar */}
          <div className="flex-shrink-0">
            <img className="w-44 " src={HijjaLogo} alt="Hijja Logo" />
          </div>

          {/* Center part of the navbar */}
          <div className="flex items-center mt-2 ml-4 grid grid grid-cols-2 ">

            <div className=''>
            <p className="huruf pb-2 mr-2 ">Hijja Indonesia</p>
            </div>

            
            
            <div className="flex items-center space-x-4 ml-36 ">
            <input
              className="text-black pl-2"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="nav-link">Cart</button>
              </div>

            <div className="flex space-x-14 mb-2">
              <Link to="/api" className="nav-link">Home</Link>
              <div 
                onMouseEnter={handleCategoriesMouseEnter}
                onMouseLeave={handleCategoriesMouseLeave}
                className="relative"
              >
                <button className="nav-link">Brand</button>
                {showCategories && (
                  <div className="absolute w-48 bg-white shadow-lg " onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave}>
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
              </div>
              
              <div 
                onMouseEnter={handlePagesMouseEnter}
                onMouseLeave={handlePagesMouseLeave}
                className="relative"
              >
                <button className="nav-link">Information</button>
                {showPages && (
                  <div className="absolute w-48 bg-white shadow-lg " onMouseEnter={handlePagesMouseEnter} onMouseLeave={handlePagesMouseLeave}>
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
              </div>
              
              <Link to="/api-blog" className="nav-link">Blog</Link>
            </div>
          </div>

          {/* Right part of the navbar */}
        
        </div>
      </div>
      <hr class="absolute top-10 border-white lg:[width:76%] ml-56 " />

    </nav>
  );
};

export default ApiNavbar;
