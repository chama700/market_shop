import React, {useContext} from 'react';
import logo from '../assets/images/logo.png';
import iconUser from '../assets/images/icon-user.svg';
import { Link } from 'react-router-dom';
import { itemContext } from "../context/ItemContext";

const Header = () => {
	const { itemsInCart } = useContext(itemContext);
	const { wishlist } = useContext(itemContext);
	return (
		<header className="mb-10 container mx-auto">
			<div className="headerWrapper">
				<div className="py-3 grid grid-cols-2 gap-6">
					<div className="w-full grid grid-cols-[auto,1fr] items-center">
						<div className="logo">
							<img src={logo} className="w-20" />
						</div>
						<div className="search">
							<div className="flex w-full h-full items-center p-2 rounded-md">
								<input
									type="text"
									placeholder="Search for fruits, vegetables..."
									className="w-full font-15 px-4 border border-transparent focus:outline-none rounded-md"
								/>
								<svg
									className="w-6 h-6 text-green-500 cursor-pointer ml-3"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
									</path>
								</svg>
							</div>
						</div>
					</div>
					<div className="flex justify-end items-center">
						<div className="grid grid-cols-3 gap-6 items-center">
							<div className="flex justify-end">
								<a href="/mywishlist" className="flex items-center text-sm text-gray-600 hover:text-green-500">
									<svg className="w-6 h-6 text-gray-500" focusable="false"
										 aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderOutlinedIcon"><path
										d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
									<span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs list-count">{wishlist.length}</span>
									<p className="ml-1">Wishlist</p>
								</a>
							</div>
							<div className="flex justify-end">
								<a href="/cart" className="flex items-center text-sm text-gray-600 hover:text-green-500">
									<svg className="w-6 h-6 text-gray-500" focusable="false"
										 aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon"><path
										d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
									<span
										className="bg-green-600 text-white px-2 py-1 rounded-full text-xs cart-count">{itemsInCart}</span>
									<p className="ml-1">Cart</p>
								</a>
							</div>
							<div className="flex justify-end">
								<a href="/login" className="flex items-center text-sm text-gray-600 hover:text-green-500">
									<img src={iconUser} className="w-6 h-6" />
									<p className="ml-1">account</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="navigation categories w-full col-span-2">
				<div className="w-full py-3 mt-2 flex flex-column gap-10 items-center">
					<div className="home elemnt-hover py-2 text-gray-800">
						<Link to="/home">Home Page</Link>
					</div>
					<div className="about elemnt-hover py-2 text-gray-800">
						<Link to="/about-us">About Us</Link>
					</div>
					<div className="fruits elemnt-hover flex items-center gap-2 py-2 text-gray-800">
						<Link to="/fruits&vegetables">Fruits & Vegetables</Link>
					</div>
					<div className="organic elemnt-hover flex items-center gap-2 py-2 text-gray-800">
						<Link to="/organic">Organic</Link>
					</div>
					<div className="others elemnt-hover flex items-center gap-2 py-2 text-gray-800">
						<Link to="/others">Other Items</Link>
					</div>
					<div className="spectial-offers elemnt-hover flex items-center gap-2 py-2 text-gray-800">
						<Link to="/specials">Special Offers</Link>
						<svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
							 aria-hidden="true" data-slot="icon">
							<path fill-rule="evenodd"
								  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
								  clip-rule="evenodd"/>
						</svg>
					</div>
					<div className="contact elemnt-hover flex items-center gap-2 py-2 text-gray-800">
						<Link to="/contact">Contact</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
