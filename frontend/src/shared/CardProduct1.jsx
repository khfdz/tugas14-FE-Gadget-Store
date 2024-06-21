import React from 'react';
import { Link } from 'react-router-dom';
import { useBoxCategoriesContext } from '../context/BoxCategoriesContext';

const CardProduct1 = ({ imageMacos, imagePB, imagePS5, imageSamsungWatch, imageAirPods, iconRight }) => {
    const { setSelectedCategories } = useBoxCategoriesContext();

    const handleCategoryClick = (category) => {
        setSelectedCategories([category]); 
    };

    return (
        <div className="grid grid-cols-5 gap-10 mr-12 ml-12 mt-12">
            {/* Bagian Kiri */}
            <div className="rounded-6xl col-span-2 bg-nt09 p-4 items-center flex-col flex">
                <img src={imageMacos} alt="Product 1" className='lg:h-[480px]'/>
                <div className="flex flex-col items-center">
                    <h2 className="font-semibold mb-3 text-5xl text-center">Laptop</h2>
                    <div className="flex items-center justify-center">
                        <Link to="/shop?category=laptops" className='text-2xl mr-2' onClick={() => handleCategoryClick('Laptop')}>All Product</Link>
                        <img src={iconRight} alt="Right Icon " className="w-8" />
                    </div>
                </div>
            </div>

            {/* Bagian Tengah */}
            <div className=" col-span-3 grid grid-cols-2 gap-6 ">

                <div className="bg-nt09 rounded-6xl flex flex-col items-center justify-between p-10">
                    <div className=" flex items-center "  style={{ width: '477px', height: '230px' }}>
                        <img src={imageSamsungWatch} alt="Product 3" className='pl-5 lg:h-[300px] mr-20' />
                        <div>
                            <h2 className="font-semibold mb-2 text-4xl ">WEARABLE</h2>
                            <div className="flex items-center">
                                <Link to="/shop?category=wearables" className='text-2xl mr-2' onClick={() => handleCategoryClick('Wearables')}>All Product</Link>
                                <img src={iconRight} alt="Right Icon" className="w-8" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-nt09 rounded-6xl flex flex-col items-center justify-between  p-10">
                    <div className=" flex items-center "  style={{ width: '477px', height: '230px' }}>
                        <img src={imageAirPods} alt="Product 3" className='pl-5 lg:h-[250px] mr-20' />
                        <div>
                            <h2 className="font-semibold mb-2 text-4xl ">AUDIO</h2>
                            <div className="flex items-center">
                                <Link to="/shop?category=audio" className='text-2xl mr-2' onClick={() => handleCategoryClick('Audio')}>All Product</Link>
                                <img src={iconRight} className="w-8" alt="Right Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-nt09 rounded-6xl flex flex-col items-center justify-between p-10">
                    <div className=" flex items-center "  style={{ width: '477px', height: '230px' }}>
                        <img src={imagePB} alt="Product 3" className='pl-0 lg:h-[200px] mr-10' />
                        <div>
                            <h2 className="font-semibold mb-2 text-4xl ">ACCESSORIES</h2>
                            <div className="flex items-center">
                                <Link to="/shop?category=accessories" className='text-2xl mr-2' onClick={() => handleCategoryClick('Accessories')}>All Product</Link>
                                <img src={iconRight} alt="Right Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-nt09 rounded-6xl flex flex-col items-center justify-between p-10">
                    <div className=" flex items-center "  style={{ width: '477px', height: '230px' }}>
                        <img src={imagePS5} alt="Product 3" className='pl-5 lg:h-[300px] mr-10' />
                        <div>
                            <h2 className="font-semibold mb-2 text-4xl ">CONSOLE</h2>
                            <div className="flex items-center">
                                <Link to="/shop?category=consoles" className='text-2xl mr-2' onClick={() => handleCategoryClick('Console')}>All Product</Link>
                                <img src={iconRight} className="w-8" alt="Right Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduct1;
