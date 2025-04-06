import React from 'react';
import { Link } from 'react-router-dom';
import Page404 from '../assets/images/page-404.png'
const PageNotFound = () => {
    return (
        <div className="not-found flex flex-col justify-center items-center text-center p-4">
            <img className="w-auto h-60 mb-4" src={Page404} alt="" />
            <p className="text-lg text-gray-700 mb-4">
                The link you clicked may be broken or the page may have been removed.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Visit the Homepage or <Link to="/contact" className="text-green-500 hover:text-green-700">Contact us</Link> about the problem.
            </p>
            <Link to="/home" className="text-green-500 hover:text-green-700 text-lg">
                Go back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
