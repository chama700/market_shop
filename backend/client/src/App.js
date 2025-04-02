import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WishlistPage from "./components/WishlistPage";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import SuccessPage from "./components/SuccessPage";
import Breadcrumb from "./components/Breadcrumb";
import "./App.css";
import CustomItemContext from "./context/ItemContext";

const App = () => {
	return (
		<CustomItemContext>
			<Router>
				<Header />
				<div className="mx-20">
					<Breadcrumb />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/fruits&vegetables" element={<ProductList />} />
						<Route path="/mywishlist" element={<WishlistPage />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/order-confirmation" element={<SuccessPage />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</CustomItemContext>
	);
};

export default App;
