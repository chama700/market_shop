import React, { useContext, useState, useEffect } from "react";
import { itemContext } from "../context/ItemContext";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { cart, totalPrice, removeFromCart, deleteFromCart, addToCart, clearCart } = useContext(itemContext);
    // États pour gérer les frais de port et le pays sélectionné
    const [shippingCost, setShippingCost] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [promoCode, setPromoCode] = useState("");  // Nouveau state pour gérer le code promo
    const [discount, setDiscount] = useState(0);  // Nouveau state pour gérer la réduction

    // Fonction pour calculer les frais de port en fonction du pays
    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);

        // Exemple de calcul des frais de port selon le pays
        let newShippingCost = 0;

        switch (country) {
            case "Morocco":
                newShippingCost = 20;  // Exemple : frais de port pour le Maroc
                break;
            case "France":
                newShippingCost = 30;  // Exemple : frais de port pour la France
                break;
            case "Spain":
                newShippingCost = 25;  // Exemple : frais de port pour l'Espagne
                break;
            case "Germany":
                newShippingCost = 35;  // Exemple : frais de port pour l'Allemagne
                break;
            default:
                newShippingCost = 0;  // Aucun frais si aucun pays n'est sélectionné
                break;
        }

        setShippingCost(newShippingCost);
    };

    // Calculer le total avec les frais de port
    const totalWithShipping = (totalPrice || 0) + shippingCost - discount;

    // Fonction pour appliquer le code promo
    const handleApplyCoupon = () => {
        if (promoCode === "DISCOUNT10") {  // Exemple de code promo
            setDiscount(10);  // Applique une réduction de 10 dhs
        } else {
            alert("Invalid promo code.");
            setDiscount(0);  // Si le code promo est incorrect, ne pas appliquer de réduction
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                    There {cart.length === 1 ? 'is' : 'are'}{" "}
                    <span className="font-semibold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>{" "}
                    product{cart.reduce((sum, item) => sum + item.quantity, 0) > 1 ? "s" : ""} in your cart
                </p>
                <button
                    onClick={clearCart}
                    className="flex items-center text-sm text-red-500 hover:text-red-600"
                    title="Clear Cart"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"/>
                    </svg>
                    Clear Cart
                </button>
            </div>

            {cart.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg">Your Cart is empty.</p>
                    <Link to="/home" className="text-green-600 hover:underline">
                        You have no items in your shopping cart.
                        Click here to continue shopping.
                    </Link>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Table Panier */}
                    <div className="lg:col-span-2">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white shadow-md rounded-lg">
                                <thead>
                                <tr className="bg-gray-100 text-gray-700 text-left">
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Unit Price</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Subtotal</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cart.map((item) => (
                                    <tr key={item._id} className="border-b">
                                        <td className="p-4 flex items-center gap-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                            <span className="font-medium">{item.name}</span>
                                        </td>
                                        <td className="p-4">{item.price} dhs</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => removeFromCart(item)}
                                                    className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => addToCart({ ...item, quantity: 1 })}
                                                    className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4">{item.price * item.quantity} dhs</td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => deleteFromCart(item)}
                                                className="text-red-500 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <Link to="/home" className="text-green-600 hover:underline">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Résumé panier */}
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
                                <select
                                    onChange={handleCountryChange}
                                    value={selectedCountry}
                                    className="w-full border rounded px-3 py-2 text-sm text-gray-700"
                                >
                                    <option value="">Choose a country</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="France">France</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
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
                            to={{
                                pathname: "/checkout",
                            }}
                            state={{
                                totalPrice: totalPrice,
                                totalWithShipping: totalWithShipping,
                            }}
                            className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 mt-4 rounded transition"
                        >
                            Proceed To CheckOut
                        </Link>
                    </div>
                    {/* Coupon Code */}
                    <div className="py-6 px-6 border-b bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Apply Coupon</h3>
                            <p className="text-sm text-gray-600">Using A Promo Code?</p>
                                <div className="mt-4">
                                     <input
                                           type="text"
                                           placeholder="Enter promo code"
                                           className="w-full border rounded px-4 py-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                           value={promoCode}
                                           onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                </div>
                                        
                            <button
                                onClick={handleApplyCoupon}
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                             Apply Coupon
                            </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CartPage;
