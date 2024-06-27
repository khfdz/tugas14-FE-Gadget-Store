import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { Link } from 'react-router-dom';
import Navbar from '../shared/ApiNavbar';
import ApiFooter from '../shared/ApiFooter';

const ApiBlog = () => {
    const { blogData, setSlug } = useContext(ApiContext);

    // Check if blogData is null or undefined
    if (!blogData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogData.map(blogEntry => (
                        <div key={blogEntry.id} className="col-md-4 mb-4">
                            <div className="card">
                                <Link to={`/api-article/${blogEntry.slug}`} onClick={() => setSlug(blogEntry.slug)}>
                                    <img className="card-img-top" src={`https://sistemtoko.com/img/user/hijja/blog/${blogEntry.img}`} alt={blogEntry.title} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-center mt-2" style={{ textTransform: 'uppercase' }}>{blogEntry.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ApiFooter />
        </div>
    );
};

export default ApiBlog;
