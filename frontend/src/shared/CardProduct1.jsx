import React from 'react';

const CardProduct1 = ({ imageMacos, imagePB, imagePS5, imageSamsungWatch, imageAirPods, iconRight}) => {
    return (
        <div className='mt-10'>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Bagian 1 */}
                <div className="">
                    {/* Product 1 */}
                    <div className="bg-nt09 rounded-6xl p-10 flex items-center justify-between flex-col" style={{ width: '477px', height: '489px' }}>
                        <img src={imageMacos} alt="Product 1" className='lg:h-[344px]'/>
                        <div className="flex flex-col items-center">
                            <h2 className="font-semibold mb-2 text-4xl text-center">Laptops</h2>
                            <div className="flex items-center justify-center">
                                <h1 className='text-xl mr-2'>All Product</h1>
                                <img src={iconRight} alt="Right Icon"></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian 2 */}
                <div className="flex flex-col justify-between">
                    {/* Product 2 */}
                    <div className="bg-nt09 rounded-6xl flex items-center mb-6 p-10"  style={{ width: '477px', height: '230px' }}>
                        <img src={imageSamsungWatch} alt="Product 3" className='pl-5 lg:h-[300px] mr-20' />
                        <div>
                            <h2 className="font-semibold mb-2 text-3xl ">WEARABLES</h2>
                            <div className="flex items-center">
                                <h1 className='text-xl mr-2'>All Product</h1>
                                <img src={iconRight} alt="Right Icon"></img>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="bg-nt09 rounded-6xl flex items-center p-10" style={{ width: '477px', height: '230px' }}>
                        <img src={imagePB} alt="Product 4" className='pl-5 lg:h-[170px] mr-10' />
                        <div > 
                            <h2 className="font-semibold mb-2 text-3xl">ACCESSORIES</h2>
                            <div className="flex items-center">
                                <h1 className='text-xl mr-2'>All Product</h1>
                                <img src={iconRight} alt="Right Icon"></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian 3 */}
                <div className="flex flex-col justify-between">
                    {/* Product 4 */}
                    <div className="bg-nt09 rounded-6xl flex items-center mb-6 p-10" style={{ width: '477px', height: '230px' }}>
                        <img src={imageAirPods} alt="Product 5" className='pl-10 lg:h-[190px] mr-20' />
                        <div>
                            <h2 className="font-semibold mb-2 text-3xl">AUDIO</h2>
                            <div className="flex items-center">
                                <h1 className='text-xl mr-2'>All Product</h1>
                                <img src={iconRight} alt="Right Icon"></img>
                            </div>
                        </div>
                    </div>
                    {/* Product 5 */}
                    <div className="bg-nt09 rounded-6xl flex items-center p-10" style={{ width: '477px', height: '230px' }}>
                        <img src={imagePS5} alt="Product 6" className='pl-2 lg:h-[270px] mr-10' />
                        <div>
                            <h2 className="font-semibold mb-2 text-3xl">CONSOLES</h2>
                            <div className="flex items-center">
                                <h1 className='text-xl mr-2'>All Product</h1>
                                <img src={iconRight} alt="Right Icon"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduct1;
