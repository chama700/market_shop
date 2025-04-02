import { createContext, useEffect, useState } from 'react';

const itemContext = createContext();

// Creating custom provider
function CustomItemContext({ children }) {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState(() => {
		// Retrieve cart from localStorage
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});
	const [itemsInCart, setItemsInCart] = useState(cart.length);
	const [totalPrice, setTotalPrice] = useState(() => {
		const savedTotalPrice = localStorage.getItem('totalPrice');
		return savedTotalPrice ? JSON.parse(savedTotalPrice) : 0;
	});

	const [wishlist, setWishlist] = useState(() => {
		const savedWishlist = localStorage.getItem('wishlist');
		return savedWishlist ? JSON.parse(savedWishlist) : [];
	});

	// Fetch products from API
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:5000/api/products');
			const products = await response.json();
			setProducts(products);
		};
		fetchData();
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
		localStorage.setItem('wishlist', JSON.stringify(wishlist));
	}, [cart, totalPrice, wishlist]);

	const toggleWishlist = (product) => {
		setWishlist((prevWishlist) => {
			const isProductInWishlist = prevWishlist.some((item) => item._id === product._id);
			if (isProductInWishlist) {
				return prevWishlist.filter((item) => item._id !== product._id); // Remove the product from wishlist
			} else {
				return [...prevWishlist, product];
			}
		});
	};

	const removeFromWishlist = (productId) => {
		setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== productId));
	};

	// Function to add items to cart
	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
		setTotalPrice((prevTotal) => prevTotal + product.price);
		setItemsInCart((prevItems) => prevItems + 1);
	};

	return (
		<itemContext.Provider value={{
			products, addToCart, itemsInCart, totalPrice, cart, wishlist, toggleWishlist, removeFromWishlist
		}}>
			{children}
		</itemContext.Provider>
	);
}

export { itemContext };
export default CustomItemContext;
