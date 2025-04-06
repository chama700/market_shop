import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../axiosConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const endpoint = "/auth/login";
            const res = await api.post(endpoint, { email, password });

                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
               console.log("success")
            setTimeout(() => navigate("/account-info"), 1000);
        } catch (err) {
            console.log("error")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-green-600 mb-6">Log in or create a user account</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* New Account Block */}
                <div className="border-gray-200">
                    <h1 className="text-2xl font-medium text-gray-800 mb-2">New account</h1>
                    <p className="text-gray-600 mb-6">
                        If you create a user account in our store, you will be guided through the ordering process more quickly, can save multiple shipping addresses, track your previous order history and much more.
                    </p>
                    <button
                        onClick={() => { navigate('/register') }}
                        className="bg-green-600 text-white px-6 py-4 hover:bg-green-700 transition">
                        Create an account
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl font-medium text-gray-800 mb-2">Customer Login</h1>
                    <div className="max-w-4xl w-full">
                        {/* Login Block */}
                        <div>
                            <p className="text-gray-600 mb-6">
                                If you have a user account with us, please log in.
                            </p>

                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                                >
                                    Log in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
