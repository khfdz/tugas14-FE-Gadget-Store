import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ApiContext } from '../context/ApiContext';

const ApiFooter = () => {
  const { pagesData, configData } = useContext(ApiContext);

  return (
    
    <footer className="footer mt-12 bg-white w-full">
      <div className='grid grid-cols-3 '>

        <div className='text-center border-2'>
          <p className='text-colorsHijja1 italic mt-12'>Talk to Us Now !</p>
          <p className='text-xl text-black'>CONTACT US</p>
          <p className='mt-1 text-black'>~~</p>
          <p className='mt-4 text-nt05 pr-4 pl-4'>{configData.config_address}</p>
          <p className='mt-4  text-black '>{configData.config_contact}</p>
        </div>

        <div className='text-center border-2 '>
          <p className='text-colorsHijja1 italic mt-12'>Talk to Us Now !</p>
          <p className='text-xl text-black'>OUR SERVICE</p>
          <p className='mt-1 text-black'>~~</p>
          <div className='text-nt05 mt-3 mb-4 '>
            {pagesData.map((page) => (
              <Link
                key={page.page_id}
                to={`/api-Information/${page.page_slug}`}
                className="block py-2 text-sm hover:text-colorsHijja1"
              >
                {page.page_title}
              </Link>
            ))}
          </div>
        </div>

        <div className='text-center border-2 '>
          <p className='text-colorsHijja1 italic mt-12'>Talk to Us Now !</p>
          <p className='text-xl text-black'>FOLLOW US</p>
          <p className='mt-1 text-black'>~~</p>
          
          <div className='mt-4'>
  <a href={configData.config_fb} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} className="text-black text-4xl mr-2 text-nt01 hover:text-colorsHijja1" />
  </a>
  <a href={configData.config_tw} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className="text-black text-4xl mr-2 text-nt01 hover:text-colorsHijja1" />
  </a>
  <a href={configData.config_instagram} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="text-black text-4xl mr-2 text-nt01 hover:text-colorsHijja1" />
  </a>
</div>

          
        </div>
              
      </div>
      <p className='text-center text-nt05 mb-2 mt-4'>
        supported by&nbsp;
        <a href="https://https://hijja.sistemtoko.com" target="_blank" rel="noopener noreferrer" className="text-colorsHijja1 hover:underline">
          www.sistemtoko.com
        </a>
        &nbsp;All rights reserved
      </p>
      <p>@khfdz</p>

              
    </footer>
  );
};

export default ApiFooter;
