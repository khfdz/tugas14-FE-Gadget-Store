import React from 'react';
import ApiNavbar from '../shared/ApiNavbar';
import ApiProductList from '../shared/ApiProductList';
import ApiFooter from '../shared/ApiFooter';

function Api() {
  return (
    <div>
    <div className=''> 
      
      <ApiNavbar />
      
      <ApiProductList />
      <ApiFooter />
    </div>
    </div>
  );
}

export default Api;
