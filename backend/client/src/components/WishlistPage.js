import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useContext(itemContext);

    const handleRemoveClick = (productId) => {
        removeFromWishlist(productId);
    };
    return (
        <div className="wishlist-page">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Your Wishlist</h1>
            {wishlist.length > 0 ? (
                <>
                    <p className="mb-4 text-lg">There are {wishlist.length} products in this list.</p>
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-4 pl-8">

                            </th>
                            <th className="p-4">Product</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Price</th>
                            <th className="p-4 pr-8 text-right">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {wishlist.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-4 pl-8">
                                    <input type="checkbox" className="form-check-input" />
                                </td>
                                <td className="p-4 flex items-center">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h6 className="text-lg font-semibold">
                                            <a href={`/shop-product/${item._id}`} className="hover:text-green-500">
                                                {item.name}
                                            </a>
                                        </h6>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="text-gray-600">{item.type}</span>
                                </td>
                                <td className="p-4">
                                    <span className="text-gray-500">{item.description}</span>
                                </td>
                                <td className="p-4">
                                    <h3 className="text-lg font-semibold text-green-600">{item.price} dhs</h3>
                                </td>
                                <td className="p-4 pr-8 text-center">
                                    <a href="#" className="text-red-500 hover:text-red-700 flex justify-end"
                                       onClick={() => handleRemoveClick(item._id)} >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishlistPage;
