// Api.jsx

import React from 'react';
import ApiNavbar from '../shared/ApiNavbar';
import ApiProductList from '../shared/ApiProductList';
import ApiFooter from '../shared/ApiFooter';

function Api() {
  return (
    <div className='ml-12 mr-12'> 
      
      <ApiNavbar />
      
      <ApiProductList />
      <ApiFooter />
    </div>
  );
}

export default Api;
