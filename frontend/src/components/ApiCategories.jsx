import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import Navbar from '../shared/Navbar';
import ApiFooter from '../shared/ApiFooter';

const ApiCategories = () => {
    const { id } = useParams();
    const { categoriesData } = useContext(ApiContext);
    const categoryData = categoriesData.find(category => category.product_category_id === id);

    if (!categoryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="api-categories mr-12 ml-12 ">
            <Navbar />
            <div className='background'>
                <p className="bg-nt06 flex items-center pl-4 h-12 text-sm">
                Home / {categoryData.product_category_name}
            </p>
            </div > 
            <div className='ml-4'>  
            <h1 className='text-3xl mb-2 mt-8'>{categoryData.product_category_name}</h1>
            <p className='mb-4'>by HIJJA</p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: categoryData.product_category_description }} className='mt-4'></div>
            </div>
            <ApiFooter />
        </div>
    );
};  

export default ApiCategories;