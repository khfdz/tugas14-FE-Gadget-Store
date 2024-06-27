import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import Navbar from '../shared/ApiNavbar';
import { format } from 'date-fns'; // Import format function from date-fns
import ApiFooter from '../shared/ApiFooter';

const ApiInformation = () => {
  const { id } = useParams();
  const { pagesData } = useContext(ApiContext);
  const pageData = pagesData.find(page => page.page_slug === id);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  const { page_title, page_body, updated_at } = pageData;

  // Transform updated_at to the desired format
  const formattedDate = format(new Date(updated_at), 'EEEE, MMMM dd, yyyy');

  return (
    <div className="api-information mr-12 ml-12 ">
      <Navbar />
      <div className='background'>
          <p className="bg-nt06 flex items-center pl-4 h-12 text-sm">
      Home / {page_title}
    </p>


      </div >
      <div className='ml-4'>
      <h1 className='text-3xl mb-2 mt-8'>{page_title}</h1>
      <p className='mb-4'>by HIJJA</p>
      <hr />
      <p className='mb-4 mt-4'>Posted on {formattedDate}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: page_body }} className='mt-4'></div>
      </div>
      <ApiFooter />
    </div>
  );
};

export default ApiInformation;
