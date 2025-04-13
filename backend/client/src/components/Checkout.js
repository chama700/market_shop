import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { totalPrice, totalWithShipping } = location.state || { totalPrice: 0, totalWithShipping: 0 };

    const [customerEmail, setCustomerEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [ccName, setCcName] = useState('');
    const [ccNumber, setCcNumber] = useState('');

    const navigate = useNavigate();

    const handleCheckout = async (e) => {
        e.preventDefault();

        const addressData = {
            customerName: `${firstName} ${lastName}`,
            customerEmail,
            firstName,
            lastName,
            username,
            shippingAddress,
            address2,
            country,
            state,
            zip
        };

        try {
            const response = await fetch('http://localhost:5000/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addressData)
            });

            const result = await response.json();

            if (response.status === 201) {
                navigate('/order-confirmation');
            } else {
                alert('Failed to save address');
            }
        } catch (error) {
            console.error(error);
            alert('Error occurred while saving address');
        }
    };

    return (
        <div className="checkout-container p-6">
            <div className="grid grid-cols-3 gap-8">
                {/* Billing Form */}
                <div className="w-full bg-white p-6 rounded-lg shadow-md col-span-2">
                    <h4 className="text-xl font-semibold mb-4">Billing Address</h4>
                    <form onSubmit={handleCheckout} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Shipping Address</label>
                            <input
                                type="text"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Address 2 (Optional)</label>
                            <input
                                type="text"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Country</label>
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Choose...</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="DE">Germany</option>
                                    <option value="FR">France</option>
                                    <option value="IN">India</option>
                                    <option value="JP">Japan</option>
                                    <option value="IT">Italy</option>
                                    <option value="MX">Mexico</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">State</label>
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Choose...</option>
                                    <option value="CA">California</option>
                                    <option value="NY">New York</option>
                                    <option value="TX">Texas</option>
                                    <option value="FL">Florida</option>
                                    <option value="ON">Ontario (Canada)</option>
                                    <option value="QC">Quebec (Canada)</option>
                                    <option value="NSW">New South Wales (Australia)</option>
                                    <option value="VIC">Victoria (Australia)</option>
                                    <option value="BER">Berlin (Germany)</option>
                                    <option value="IDF">Île-de-France (France)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Zip</label>
                                <input
                                    type="text"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        <hr className="border-t my-4" />

                        <h4 className="text-xl font-semibold mb-2">Payment</h4>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="credit"
                                value="credit"
                                name="paymentMethod"
                                defaultChecked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor="credit" className="text-sm">Credit Card</label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Name on Card</label>
                                <input
                                    type="text"
                                    value={ccName}
                                    onChange={(e) => setCcName(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Credit Card Number</label>
                                <input
                                    type="text"
                                    value={ccNumber}
                                    onChange={(e) => setCcNumber(e.target.value)}
                                    required
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
                <div className="bg-gray-50 p-6 rounded shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

                    <div className="flex justify-between py-2 border-b">
                        <span>Subtotal</span>
                        <span>{totalPrice} dhs</span>
                    </div>

                    {/* Estimation & Shipping */}
                    <div className="py-4 border-b">
                        <h3 className="text-md font-medium mb-2">Estimate Shipping and Tax</h3>
                        <p className="text-sm text-gray-600">Shipping and additional costs are calculated based on values you have entered.</p>
                        <div className="mt-2">
                            <input
                                type="text"
                                placeholder="Enter your zip/postal code"
                                className="w-full border rounded px-3 py-2 text-sm text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between py-2 border-b font-semibold text-lg">
                        <span>Total to Pay</span>
                        <span>{totalWithShipping} dhs</span>
                    </div>

                    <Link
                        to="/cart"
                        className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 mt-4 rounded transition"
                    >
                        Cart Edit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
