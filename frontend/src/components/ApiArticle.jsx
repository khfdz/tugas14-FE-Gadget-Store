import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import Navbar from '../shared/ApiNavbar';
import ApiFooter from '../shared/ApiFooter';
import { format } from 'date-fns';

const ApiArticle = () => {
    const { apiArticle } = useContext(ApiContext);
    const [articleData, setArticleData] = useState(null);

    const formattedDate = apiArticle ? format(new Date(apiArticle.updated_at), 'EEEE, MMMM dd, yyyy') : '';

    useEffect(() => {
        if (apiArticle) {
            setArticleData(apiArticle);
        }
    }, [apiArticle]);

    if (!articleData) {
        return <div>Loading...</div>;
    }

    return (
        <div className=''>
            <Navbar />
                <p className="mr-8 ml-8 bg-nt06 flex items-center pl-4 h-12 text-sm">
      Home / {articleData.page_title}
    </p>    
            <div className=" container mx-auto px-4">
                <div className="article-content">
        
                    <h2 className='text-3xl mt-8 text-colorsHijja1 mb-2'>{articleData.page_title}</h2>
                    <p className='mb-2'>by&nbsp;
        <a href='https://hijja.sistemtoko.com' target='_blank' rel='noopener noreferrer' className='text-colorsHijja1 text-xl '>
          HIJJA
        </a>
      </p>
                    <hr />
                    <p className='mt-4 mb-4'>Posted on {formattedDate}</p>
                    <hr />
                    <img className='mb-8 mt-8' src={`${articleData.basePathImage}/${articleData.page_img}`} alt={articleData.page_title} />
                    <div className='text-sm ' dangerouslySetInnerHTML={{ __html: articleData.page_body }} />
                </div>
            </div>
            <ApiFooter />
        </div>
    );
};

export default ApiArticle;
