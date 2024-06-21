import React from 'react';
import iconRight from '../images/icon/icon_right.png'; // Pastikan jalur menuju ikon benar

const Banner0 = ({ title, breadcrumbs }) => {
    return (
        <div className="bg-nt07 md:px-14 mb-20 p-9 mx-auto text-pr09 rounded-bl-cusnavbl rounded-br-cusnavbr h-96 flex items-center justify-center text-center">
            <div className="text-white font-semibold flex flex-col items-center justify-center">
                <p className="text-6xl font-small mt-10 mb-4">{title}</p>
                <div className="flex items-center text-4xl text-small font-small">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={index}>
                            <p>{breadcrumb}</p>
                            {index < breadcrumbs.length - 1 && (
                                <img src={iconRight} alt="Right Icon" className="mx-2 w-10" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner0;
