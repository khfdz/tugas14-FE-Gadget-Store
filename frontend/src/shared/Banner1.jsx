import React from 'react';
import { Link } from 'react-router-dom';

const Banner1 = ({ imageBanner1, heading, subheading, btn1 }) => {
    return (
        <div className='ml-12 mr-12'>
            <div className='mt-12 flex flex-col md:flex-row-reverse justify-between items-center gap-0'>
                <div>
                    <img src={imageBanner1} alt="Iphone" className='lg:h-[400px] mt-8'/>
                </div>
                <div className="md:w-3/5 mt-12">
                    <h2 className="text-xl font-medium">{heading}</h2>
                    <h1 className='md:text-6xl  font-bold mb-6 mt-6 leading-relaxed'>{subheading}</h1>
                    <div>
                        <Link to="/detail/3">
                            <button className='btnPrimary text-xl h-12 '>{btn1}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner1;
