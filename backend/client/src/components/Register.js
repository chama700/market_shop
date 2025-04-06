import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../axiosConfig";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (status) {
            const timeout = setTimeout(() => setStatus(null), 4000);
            return () => clearTimeout(timeout);
        }
    }, [status]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const endpoint = "/auth/register";
            const res = await api.post(endpoint, { email, password, firstName, lastName });

            setStatus({
                type: "success",
                message: "Account created successfully!",
            });

            setTimeout(() => navigate("/login"), 1000);
        } catch (err) {
            setStatus({
                type: "error",
                message: err.response?.data?.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-green-600 mb-6">Create a user account</h1>

            {status && (
                <div className={`flex items-center justify-center px-6 py-4 mb-6 rounded-md shadow-md border container mx-auto
                    ${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        {status.type === 'success' ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z" clipRule="evenodd" />
                        ) : (
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                    </svg>
                    <span>{status.message}</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="rounded-lg">
                    <h1 className="text-2xl font-medium text-gray-800 mb-6">Personal information</h1>
                    <form onSubmit={handleRegister}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">First Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">Last Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                        <h1 className="text-2xl font-medium text-gray-800 my-6">Login details</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium text-gray-700">Password *</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password *</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
