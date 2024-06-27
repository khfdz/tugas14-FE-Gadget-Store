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
        <div className='mr-12 ml-12'>
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="article-content">
                    <h2 className='text-3xl '>{articleData.page_title}</h2>
                    <p>by {articleData.user.author} </p>
                    <hr />
                    <p className='mt-4 mb-4'>Posted on {formattedDate}</p>
                    <hr />
                    <img className='mb-4 mt-4' src={`${articleData.basePathImage}/${articleData.page_img}`} alt={articleData.page_title} />
                    <div className='text-sm ' dangerouslySetInnerHTML={{ __html: articleData.page_body }} />
                </div>
            </div>
            <ApiFooter />
        </div>
    );
};

export default ApiArticle;
