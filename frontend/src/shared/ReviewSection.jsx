import React, { useState, useEffect } from 'react';
import iconStar from '../images/icon/iconStar.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons library
import reviewData from '../../src/DataJson/review.json';

const ReviewSection = ({ productId }) => {
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Filter reviews based on productId and limit to 5 reviews
        const filteredReviews = reviewData.reviews.filter(review => review.productId === productId);
        setDisplayedReviews(filteredReviews.slice(currentIndex, currentIndex + 5));
    }, [productId, currentIndex]);

    const showNextReviews = () => {
        setCurrentIndex(prevIndex => prevIndex + 5);
    };

    const showPreviousReviews = () => {
        setCurrentIndex(prevIndex => Math.max(0, prevIndex - 5));
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-2xl mb-4 ml-14">Review</p>
                <div className="flex ">
                    {currentIndex > 0 && (
                        <button onClick={showPreviousReviews} className=" text-md mb-4 w-28  flex items-center">
                            <FaChevronLeft />
                        </button>
                    )}
                    {reviewData.reviews.filter(review => review.productId === productId).length > currentIndex + 5 && (
                        <button onClick={showNextReviews} className=" text-md mb-4 w-28  flex items-center ">
                            <FaChevronRight />
                        </button>
                    )}
                </div>
            </div>

            {displayedReviews.map((review) => (
                <div key={review.id} className="bg-nt09 p-4 rounded-3xl ml-12 mr-20 mb-4">
                    <div className="grid grid-cols-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="font-semibold mr-2 text-md mb-2">{review.name}</p>
                        </div>
                        <div>
                            <div className="flex justify-end mb-4">
                                {[...Array(review.stars)].map((_, index) => (
                                    <img key={index} src={iconStar} alt="Star" className="w-4 " />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm">{review.comment}</p>
                </div>
            ))}

        </div>
    );
};

export default ReviewSection;
