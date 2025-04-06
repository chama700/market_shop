import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import {Link} from "react-router-dom";


const ProductItem = ({ product }) => {
	const { addToCart, wishlist, toggleWishlist } = useContext(itemContext);

	const isInWishlist = wishlist.some((item) => item._id === product._id);
	const handleAddToCart = (product) => {
		addToCart(product)

	};

	const handleToggleWishlist = (product) => {
		toggleWishlist(product);  // Toggle wishlist for the clicked product only
	};

	return (
		<div className="product-card">
			<Link to={`/product/${product._id}`}>
				<img className="product-image" src={product.image} alt={product.name} />
			</Link>
			<div className="product-details">
				<Link to={`/product/${product._id}`} className="hover:underline">
					<h3 style={{ fontWeight: "700" }}>{product.name}</h3>
				</Link>
				<p style={{ fontWeight: "300" }}>
					{product.description}
				</p>
				<p className="pt-3" style={{ fontWeight: "500" }}>
					Price: {product.price} Rs/Kg
				</p>
				<button className="product-card-bottom flex flex-row my-3" onClick={
					() => handleAddToCart(product)
				}>
					<svg className="w-5 h-5" focusable="false" fill="#16A34A"
						 aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon"><path
						d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
					<p className="ml-1">Add to Cart</p>
				</button>
				<button
					className="flex items-center text-sm text-gray-600 hover:text-red-500"
					onClick={() => handleToggleWishlist(product)}
				>
					<svg
						className={`w-5 h-5 ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`}
						viewBox="0 0 24 24"
						fill={isInWishlist ? 'currentColor' : 'text-gray-600'}
					>
						<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
					</svg>
					<p className={`ml-1 ${isInWishlist ? 'text-red-500' : 'text-gray-600'}`}>
						{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
					</p>
				</button>
			</div>
		</div>
	);
};

export default ProductItem;