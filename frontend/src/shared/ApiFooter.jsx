import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const ApiFooter = () => {
  const { pagesData, configData } = useContext(ApiContext);

  return (
    <footer className="footer mt-12">
      <div className='grid grid-cols-3'>

        <div>
          <p>
            CONTACT US
          </p>
          <p className='mt-4'>{configData.config_address}</p>
          <p className='mt-4'>{configData.config_contact}</p>
        </div>

        <div>
          <p>OUR SERVICES</p>
          <div>
            {pagesData.map((page) => (
              <Link
                key={page.page_id}
                to={`/api-Information/${page.page_slug}`}
                className="block py-2 text-sm hover:text-blue-500"
              >
                {page.page_title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p>FOLLOW US</p>
          <div>
            <p>{configData.config_fb}</p>
            <p>{configData.config_tw}</p>
            <p>{configData.config_instagram}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ApiFooter;
