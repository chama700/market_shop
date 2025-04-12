import React, { useContext } from "react";
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";
import { itemContext } from "../context/ItemContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
    const { products , addToCart } = useContext(itemContext);
    const { wishlist } = useContext(itemContext);
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState("");
    const { id } = useParams();
    const [quantity, setQuantity] = React.useState(1);
    const product = products.find((p) => p._id === id);
    const {
        type,
        origine,
        Conservation,
        Ferme,
        stock
    } = product || {};

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
        <section className="detailsPage py-12">
            <div className="container mx-auto px-4">
                {/* 3 colonnes : Zoom - Info - Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* COLONNE 1 : Image + Produits similaires */}
                    <div>
                        <div className="detail-gallery mb-6">
                            <div className="zoom-icon border rounded-lg overflow-hidden">
                                <img className="product-image" src={product.image} alt={product.name} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Produits similaires</h2>
                            <Slider {...settings} className="zoomSlider">
                                {products
                                    .filter((p) => p._id !== product._id)
                                    .slice(0, 4)
                                    .map((item) => (
                                        <div key={item._id} className="item px-2">
                                            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                                                <img
                                                    src={item.image}
                                                    className="w-full h-32 object-cover"
                                                    alt={item.name}
                                                />
                                                <div className="p-2 text-center">
                                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                                    <p className="text-green-600 font-bold text-sm">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                    {/* COLONNE 2 : Infos produit */}

                        <div className="productInfo max-w-2xl p-6 bg-white rounded-xl shadow-md">
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                            <div className="flex items-center mb-4 mt-3">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={reviews / 20}
                                    precision={0.5}
                                    readOnly
                                />
                                <span className="ml-2 text-gray-500 text-sm">({reviews} reviews)</span>
                            </div>

                            <div className="flex items-center mb-3">
                                <span className="text-3xl text-green-600 font-bold">${product.price}</span>
                                <div className="ml-4">
                                    <span className="text-sm text-green-600">{discount}% off</span>
                                    <span className="block text-gray-400 line-through">${oldPrice}</span>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                                {product.description}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti...
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                Quantity
                                <div className="flex items-center border border-green-600 rounded overflow-hidden">
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        className="w-16 text-center py-2 border-r border-green-600 outline-none"
                                    />
                                </div>
                                <button
                                    onClick={() => addToCart({ ...product, quantity })}
                                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
                                >
                                    Ajouter au panier
                                </button>
                                    <div className="flex justify-end">
                                        <a href="/mywishlist" className="flex items-center text-sm text-gray-600 hover:text-green-500">
                                            <svg className="w-6 h-6 text-gray-500" focusable="false"
                                                 aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderOutlinedIcon"><path
                                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs list-count">{wishlist.length}</span>
                                            <p className="ml-1">Wishlist</p>
                                        </a>
                                    </div>
                            </div>
                            {/* Infos supplémentaires */}
                            <div className="mt-6 space-y-1 text-sm text-gray-700">
                                {type && (
                                    <p><span className="font-semibold">Type:</span> {type}</p>
                                )}
                                {origine && (
                                    <p><span className="font-semibold">Origine:</span> {origine}</p>
                                )}
                                {Conservation && (
                                    <p><span className="font-semibold">Conservation:</span> {Conservation}</p>
                                )}
                                {Ferme && (
                                    <p><span className="font-semibold">Ferme:</span> {Ferme}</p>
                                )}
                                {typeof stock !== "undefined" && (
                                    <p>
                                        <span className="font-semibold">Stock:</span>{' '}
                                        {stock > 0 ? (
                                            <span className="text-green-600 font-medium">In Stock ({stock})</span>
                                        ) : (
                                            <span className="text-red-500 font-medium">Out of stock</span>
                                        )}
                                    </p>
                                )}

                            </div>
                        </div>
                    {/* COLONNE 3 : Sidebar Widgets */}
                    <div className="space-y-6">
                        {/* Widget 1 */}
                        <div className="sidebar-widget widget-category-2 p-4 border rounded-lg shadow-sm mb-30">
                            <h4 className="text-lg font-semibold mb-4">Catégories</h4>
                            <ul className="space-y-3">
                                {[
                                    {
                                        name: 'Fruits & Légumes',
                                        count: 12,
                                        icon: '/icons/fruit.png',
                                    },
                                    {
                                        name: 'Produits Laitiers',
                                        count: 8,
                                        icon: '/icons/milk.png',
                                    },
                                    {
                                        name: 'Boulangerie',
                                        count: 6,
                                        icon: '/icons/bread.png',
                                    },
                                    {
                                        name: 'Viandes & Poissons',
                                        count: 10,
                                        icon: '/icons/meat.png',
                                    },
                                    {
                                        name: 'Boissons',
                                        count: 15,
                                        icon: '/icons/drink.png',
                                    },
                                    {
                                        name: 'Produits Bio',
                                        count: 7,
                                        icon: '/icons/bio.png',
                                    }
                                ].map((category, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center justify-between bg-white rounded-md hover:bg-gray-50 transition p-2 border border-gray-100"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={category.icon} alt={category.name} className="w-6 h-6 object-contain" />
                                            <span className="text-sm font-medium text-gray-700">{category.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({category.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Widget 3 - Nouveau Produits */}
                        <div className="sidebar-widget product-sidebar p-6 bg-gray-100 rounded-lg shadow-sm mb-30">
                            <h4 className="text-lg font-semibold mb-4 border-b-2 border-green-600 inline-block pb-1">
                                Nouveau Produits
                            </h4>

                            <div className="space-y-4 mt-4">
                                {[
                                    {
                                        name: 'Ananas Bio Fraîches',
                                        image: '/images/products/ananas.jpg',
                                        price: 2.99,
                                    },
                                    {
                                        name: 'Pain Complet Maison',
                                        image: '/images/products/bread.png',
                                        price: 3.50,
                                    },
                                    {
                                        name: 'Yagurt Fermier Nature',
                                        image: '/images/products/yagourt.jpg',
                                        price: 1.20,
                                    }
                                ].map((product, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 rounded object-cover border"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-800">{product.name}</p>
                                            <p className="text-xs text-green-600 font-semibold">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECTION AVIS CLIENTS */}
                <div className="mt-12">
                    {/* Formulaire de saisie d'un nouvel avis */}
                    <div className="border p-6 rounded-lg bg-gray-50 shadow-inner">
                        <h3 className="text-lg font-semibold mb-4">Laissez votre avis</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            // ici ajouter l’appel API ou logique pour sauvegarder
                            console.log("Avis envoyé :", rating, comment);
                        }}>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">Votre note :</label>
                                <Rating
                                    name="user-rating"
                                    value={rating}
                                    onChange={(_, newValue) => setRating(newValue)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium">Votre commentaire :</label>
                                <textarea
                                    rows="4"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Exprimez votre opinion sur ce produit..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
