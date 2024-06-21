import React from "react";
import { Link } from 'react-router-dom';

const Banner2 = ({ imageBanner2, titleBanner2, textBanner2, btnBanner2 }) => {
    return (
        <div className='mt-14 ml-12 mr-12'>
            <div className="gradientBg2 flex flex-col md:flex-row justify-between items-center gap-0 rounded-3xl">
                <div>
                    <img src={imageBanner2} alt="Iphone" className='lg:h-[596px] pl-60' />
                </div>
                <div className="md:w-3/5 pl-20">
                    <h1 className="text-8xl font-medium" dangerouslySetInnerHTML={{ __html: titleBanner2 }} style={{ lineHeight: '1.2em' }}></h1>
                    <h1 className='md:text-4xl  font-small mb-6 mt-6 leading-relaxed'>{textBanner2}</h1>

                    <div>
                        <Link to ="/detail/17">
                        <button className='btnSecondary h-14 w-52 text-3xl'>{btnBanner2}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
