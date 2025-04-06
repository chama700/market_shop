import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const AccountInfo = () => {
    const [accountInfo, setAccountInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [openAccordion, setOpenAccordion] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            return;
        }

        const fetchAccountInfo = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/account', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                if (response.ok) {
                    setAccountInfo(data.user);
                } else {
                    setErrorMessage(data.message || 'Unauthorized');
                }
            } catch (error) {
                setErrorMessage('Failed to fetch account information');
            }
        };

        fetchAccountInfo();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleAccordion = (section) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    if (errorMessage) {
        return <div className="text-red-500 font-medium">{errorMessage}</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-green-600 text-white p-4">
                <div className="text-lg font-bold">Dashboard</div>
                <div className="mt-6 space-y-2">
                    {/* Accordion - Dashboard */}
                    <div>
                        <button
                            className="w-full text-left text-gray-200 hover:text-white focus:outline-none"
                            onClick={() => toggleAccordion('dashboard')}
                        >
                            <div className="flex justify-between items-center">
                                <span>Dashboard</span>
                                <span>{openAccordion === 'dashboard' ? '-' : '+'}</span>
                            </div>
                        </button>
                        {openAccordion === 'dashboard' && accountInfo && (
                            <div className="pl-4 mt-2">
                                <p><strong>First Name:</strong> {accountInfo.firstName}</p>
                                <p><strong>Last Name:</strong> {accountInfo.lastName}</p>
                                <p><strong>Email:</strong> {accountInfo.email}</p>
                            </div>
                        )}
                    </div>

                    {/* Accordion - Logout */}
                    <div>
                        <button
                            className="w-full text-left text-gray-200 hover:text-white focus:outline-none mt-4"
                            onClick={() => toggleAccordion('logout')}
                        >
                            <div className="flex justify-between items-center">
                                <span>Logout</span>
                                <FiLogOut className="text-lg" />
                            </div>
                        </button>
                        {openAccordion === 'logout' && (
                            <div className="mt-2">
                                <button
                                    className="bg-white text-green-600 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 px-4 py-2 rounded-md"
                                    onClick={handleLogout}
                                >
                                    Confirm Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome, {accountInfo ? accountInfo.firstName : ''}!</h1>

                {/* Account Details Table */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Account Details</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">First Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{accountInfo ? accountInfo.firstName : ''}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{accountInfo ? accountInfo.lastName : ''}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{accountInfo ? accountInfo.email : ''}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Additional Paragraphs */}
                <div className="bg-white p-6 rounded-md shadow-md">
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to your account! Here you can view and manage all your account details, preferences, and settings.
                    </p>
                    <p className="text-sm text-gray-600">
                        We take your privacy and security seriously. If you need help with your account or have any questions, feel free to reach out to our support team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
