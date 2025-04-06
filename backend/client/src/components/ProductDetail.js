import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { itemContext } from "../context/ItemContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
    const { products } = useContext(itemContext);
    const { id } = useParams();

    const product = products.find((p) => p._id === id);

    if (!product) {
        return <h2 className="text-center text-red-500">Produit non trouvé</h2>;
    }

    const reviews = Math.floor(Math.random() * 100) + 1; // Entre 1 et 100 avis
    const discount = Math.floor(Math.random() * 30) + 10; // Entre 10% et 30% de réduction
    const oldPrice = (product.price / (1 - discount / 100)).toFixed(2); // Prix d'origine avant réduction

    var settings = {
        dots: true,
        infinite: true, // Set to true for infinite scrolling
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000, // Automatically scrolls every 2 seconds
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            {/* Contenu principal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Section gauche : Image produit et zoom */}
                <div className="md:col-span-1 relative group">
                    <img
                        className="product-image w-full rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src={product.image}
                        alt={product.name}
                    />

                    {/* Zoom effect for the main image */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>

                    {/* Slider des images supplémentaires */}
                    <Slider {...settings} className="mt-4">
                        <div>
                            <img src={product.image} className="w-full rounded-md" />
                        </div>
                        <div>
                            <img src={product.image} className="w-full rounded-md" />
                        </div>
                        <div>
                            <img src={product.image} className="w-full rounded-md" />
                        </div>
                        <div>
                            <img src={product.image} className="w-full rounded-md" />
                        </div>
                    </Slider>
                </div>

                {/* Section droite : Infos produit */}
                <div className="md:col-span-2 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

                    <div className="flex items-center space-x-4">
                        <span className="text-green-600 text-2xl font-semibold">${product.price}</span>
                        <div className="text-sm flex flex-col">
                            <span className="text-red-500 font-bold">{discount}% off</span>
                            <span className="line-through text-gray-500">${oldPrice}</span>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg">{product.description}</p>

                    <div className="flex space-x-4">
                        {/* Rating and Reviews */}
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="text-gray-500">({reviews} avis)</span>
                        </div>
                    </div>

                    {/* Quantity input and Add to Cart button */}
                    <div className="flex items-center space-x-4 mt-6">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-all duration-300">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
