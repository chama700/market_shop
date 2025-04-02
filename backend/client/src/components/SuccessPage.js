import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';

const SuccessPage = () => {
    const navigate = useNavigate();
    return (
        <div className="success-page p-8 bg-white shadow-xl rounded-lg max-w-3xl mx-auto">
            <div className="text-center mb-6">
                <FaCheckCircle className="text-5xl text-green-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-800">Order Placed Successfully!</h1>
                <p className="text-lg text-gray-600 mt-2">Thank you for your purchase. Your order has been successfully placed.</p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
                <button
                    onClick={() => navigate('/home')}
                    className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                    <FaShoppingCart className="text-lg" />
                    <span>Continue Shopping</span>
                </button>
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 flex items-center space-x-2"
                >
                    <FaPhoneAlt className="text-lg" />
                    <span>Contact Us</span>
                </button>
            </div>

            <div className="text-center text-lg text-gray-700">
                <p>If you have any questions, feel free to <a href="/contact" className="text-green-500 hover:underline">contact us</a>.</p>
            </div>
        </div>
    );
};

export default SuccessPage;
