import React from 'react';
import { Link } from 'react-router-dom';

const Banner3 = ({ ImageBanner3, titleBanner2, textBanner2, btnBanner2 }) => {
    return (
        <div className='mt-14 ml-12 mr-10'>
            <div className="gradientBg1 flex flex-col md:flex-row justify-between items-center gap-0 rounded-3xl">
                <div>
                    <img src={ImageBanner3} alt="Iphone" className='lg:h-[400px] ' />
                </div>
                <div className="md:w-3/5 pl-20">
                    <h1 className="text-6xl font-medium" dangerouslySetInnerHTML={{ __html: titleBanner2 }} style={{ lineHeight: '1.2em' }}></h1>
                    <h1 className='md:text-2xl  font-small mb-6 mt-6 leading-relaxed'>{textBanner2}</h1>

                    <div>
                        <Link to ="/detail/13">
                        <button className='btnSecondary  text-xl'>{btnBanner2}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3