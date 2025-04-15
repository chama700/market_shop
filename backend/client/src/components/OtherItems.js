import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { itemContext } from "../context/ItemContext";
import otherItems from "../data/OtherItems";

const OtherItems = () => {
    const navigate = useNavigate();
    const { addToCart } = useContext(itemContext);
    const [quantities, setQuantities] = useState(
        otherItems.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleIncrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const handleDecrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, prev[id] - 1),
        }));
    };

    const handleClick = (id) => {
        // Rediriger vers la page de détails du produit
        navigate(`/product/${id}`);
    };

    const handleAddToCart = (item) => {
        const quantity = quantities[item.id];
        const product = {
            _id: item.id.toString(),
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: quantity,
        };

        addToCart(product);
        alert(`${item.name} (x${quantity}) Add To cart !`);
    };

    return (
        <div className="container mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-green-600 mb-6">Other Items</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-xl shadow-md">
                    <thead>
                    <tr className="bg-green-100 text-left">
                        <th className="p-4">Item</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {otherItems.map((item) => (
                        <tr
                            key={item.id}
                            className="border-t transition duration-300 hover:bg-gray-100"
                            onClick={() => handleClick(item.id)} // Ajout du click sur la ligne
                        >
                            <td className="p-4 flex items-center gap-4 cursor-pointer">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-28 h-28 object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <span className="font-medium">{item.name}</span>
                            </td>
                            <td className="p-4 text-green-600 font-semibold">
                                {item.price.toFixed(2)} dhs
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="w-6 text-center">{quantities[item.id]}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="p-4">
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                                >
                                    🛒 Add to Cart
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OtherItems;
