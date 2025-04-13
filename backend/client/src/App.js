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
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import CustomItemContext from "./context/ItemContext";
import AccountInfo from "./components/AccountInfo";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import OtherItems from "./components/OtherItems";

const App = () => {
	return (
		<CustomItemContext>
			<Router>
				<Header />
				<Breadcrumb />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/fruits&vegetables" element={
						<div className="container mx-auto">
							<h1 className="text-3xl font-bold text-green-600 mb-6">Fruits And Vegetables</h1>
							<ProductList /></div>
					} />
					<Route path="/mywishlist" element={
						<div className="container mx-auto"><WishlistPage /></div>
					} />
					<Route path="/contact" element={
						<div className="container mx-auto"><Contact /></div>
					} />
					<Route path="/checkout" element={
						<div className="container mx-auto"><Checkout /></div>
					} />
					<Route path="/order-confirmation" element={
						<div className="container mx-auto"><SuccessPage /></div>
					} />
					<Route path="*" element={
						<div className="container mx-auto"><PageNotFound /></div>
					} />
					<Route path="/login" element={
						<div className="container mx-auto"><Login /></div>
					} />
					<Route path="/register" element={
						<div className="container mx-auto"><Register /></div>
					} />
					<Route path="/account-info" element={
						<div className="container mx-auto"><AccountInfo /></div>
					} />
					<Route path="/product/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<div className="container mx-auto"><CartPage /></div>} />
					<Route path="/others" element={
						<div className="container mx-auto"><OtherItems /></div>
					} />
				</Routes>
				<Footer />
			</Router>
		</CustomItemContext>
	);
};

export default App;
