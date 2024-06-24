import React from 'react';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

const BoxCategories = () => {
    const {
        selectedCategories,
        setSelectedCategories,
        selectedBrands,
        setSelectedBrands,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        
    } = useBoxCategoriesContext();

    const handleCategoryCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleBrandCheckboxChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(br => br !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    return (
        <div className="border-4 rounded-xl border-nt09 p-4 ">
            <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Categories</h3>
                <div className="text-xl font-small ">
                    {['Smartphone', 'Laptop', 'Audio', 'Console', 'Accessories', 'Wearables'].map(category => (
                        <label key={category} className=" flex items-center mb-6">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryCheckboxChange(category)}
                            />
                            <span className="custom-checkbox mr-2"></span>
                            {category}
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Filter By Brand</h3>
                <div className='text-xl font-small'>
                    {['Apple', 'Samsung', 'Xiaomi', 'Google', 'Sony'].map(brand => (
                        <label key={brand} className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandCheckboxChange(brand)}
                            />
                            <span className="custom-checkbox mr-2"></span>
                            {brand}
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-4">Filter By Price</h3>
                <div className="flex flex-col font-small text-xl">
                    <input
                        type="number"
                        className="p-1 border rounded bg-nt09 border-none mb-6 h-16 w-full text-center "
                        placeholder="Price Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        className="p-1 border rounded bg-nt09 border-none mb-2 h-16 w-full text-center text-xl "
                        placeholder="Price Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="btnPrimary rounded-2xl h-14 text-xl font-semibold text-white px-4 py-2 rounded w-full"
            >
                Filter
            </button>
        </div>
    );
};

export default BoxCategories;
