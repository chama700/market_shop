import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    if (location.pathname === '/' || location.pathname === '/home') {
        return null;
    }
    return (
        <div className="breadcrumb py-5 mb-10">
            <nav className="flex items-center space-x-2 text-gray-700">
                <Link to="/" className="text-blue-500 hover:text-blue-700 flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2h-5v-6h-4v6H5a2 2 0 0 1-2-2V9.5z"/>
                    </svg>
                    <span>Home</span>
                </Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <React.Fragment key={to}>
                            <span>&gt;</span>
                            <Link to={to} className="text-blue-500 hover:text-blue-700">
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        </React.Fragment>
                    );
                })}
            </nav>
        </div>
    );
};

export default Breadcrumb;
