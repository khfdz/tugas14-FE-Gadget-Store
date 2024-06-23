import React from "react";
import { Link } from 'react-router-dom';

const Banner2 = ({ imageBanner2, titleBanner2, textBanner2, btnBanner2 }) => {
    return (
        <div className='mt-14 ml-12 mr-12'>
            <div className="gradientBg2 flex flex-col md:flex-row justify-between items-center gap-0 rounded-3xl">
                <div>
                    <img src={imageBanner2} alt="Iphone" className='lg:h-[400px] ml-28' />
                </div>
                <div className="md:w-3/5 pl-28">
                    <h1 className="text-6xl font-medium" dangerouslySetInnerHTML={{ __html: titleBanner2 }} style={{ lineHeight: '1.2em' }}></h1>
                    <h1 className='md:text-2xl  font-small mb-6 mt-6 leading-relaxed'>{textBanner2}</h1>

                    <div>
                        <Link to ="/detail/17">
                        <button className='btnSecondary  text-xl'>{btnBanner2}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
