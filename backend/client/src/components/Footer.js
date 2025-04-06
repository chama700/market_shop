import React, {useState} from 'react';
import AppStore from '../assets/images/app-store.jpg'
import Payment from '../assets/images/payment-method.png'
import GooglePlay from '../assets/images/google-play.jpg'
import Newsletter from "../assets/images/banner.png";
import banner from "../assets/images/banner2.png";
import Img from "../assets/images/img.png";
import { useNewsletter, NewsletterForm } from './Newsletter';
const Footer = () => {
	const { email, setEmail, handleSubmit, status } = useNewsletter();
	return (
		<footer className="bg-white shadow-md mt-20">
			{status && (
				<div
					className={`flex items-center justify-center px-6 py-4 mb-6 rounded-md shadow-md border container mx-auto
			${status.type === 'success'
						? 'bg-green-50 text-green-700 border-green-200'
						: 'bg-red-50 text-red-700 border-red-200'
					}`}
				>
					<svg
						className={`w-5 h-5 mr-3 flex-shrink-0
				${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						{status.type === 'success' ? (
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
								clipRule="evenodd"
							/>
						) : (
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clipRule="evenodd"
							/>
						)}
					</svg>
					<span>{status.message}</span>
				</div>
			)}
			<div className="container mx-auto relative single-hero-slider single-animation-wrap mx-20 mb-20">
				<img src={Newsletter} alt="newsletter" className="footer-banner w-full h-auto rounded-lg"/>
				<div className="absolute top-1/2 left-6 transform -translate-y-1/2 pl-20">
					<h1 className="display-4 text-3xl font-bold mb-5">Stay home &amp; get your daily<br/>needs from our shop</h1>
					<p className="mb-65 text-lg mb-8">Start You'r Daily Shopping with <span className="text-green-600 hover:underline cursor-pointer">Market Shop</span></p>
					<div className="flex flex-column">
						<div className="form-banner">
							<NewsletterForm email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
						</div>
						<div className="banner">
							<img src={banner} alt="newsletter" className="w-full h-auto rounded-lg"/>
						</div>
					</div>
				</div>
			</div>
			<div className="footerWrapper py-6 border-t">
				<div className="container mx-auto">
					<div className="grid grid-cols-6 gap-6">
						<div>
							<img src={Img} className="w-full"/>
						</div>
						<div className="font-sm">
							<p className="flex flex-row gap-3 mb-2 items-center">
								<svg className="w-7 h-7" fill="#16A34A" focusable="false" aria-hidden="true"
									 viewBox="0 0 24 24" data-testid="LocationOnOutlinedIcon">
									<path
										d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
									<circle cx="12" cy="9" r="2.5"></circle>
								</svg>
								<p><strong>Address</strong>: Fes Morocco</p>
							</p>
							<p className="flex flex-row gap-3 mb-2 items-center">
								<svg className="w-7 h-7" fill="#16A34A" focusable="false"
									 aria-hidden="true" viewBox="0 0 24 24" data-testid="HeadphonesOutlinedIcon">
									<path
										d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z"></path>
								</svg>
								<p><strong>Call Us:</strong> (+212) 600-000-000</p>
							</p>
							<p className="flex flex-row gap-3 mb-2 items-center">
								<svg className="w-7 h-7" fill="#16A34A" focusable="false"
									 aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon">
									<path
										d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
								</svg>
								<p><strong>Email:</strong> marketShop@gmail.com</p>
							</p>
							<p className="flex flex-row gap-3 mb-2 items-center">
								<svg className="w-7 h-7" fill="#16A34A" focusable="false"
									 aria-hidden="true" viewBox="0 0 24 24" data-testid="WatchLaterOutlinedIcon">
									<path
										d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"></path>
								</svg>
								<p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-600">Categories</h3>
							<ul className="mt-2 space-y-2 gray-text">
								<li><a href="/fruits&vegetables" className="hover:text-green-500">Fruits & Vegetables</a></li>
								<li><a href="/organic" className="hover:text-green-500">Organic</a>
								</li>
								<li><a href="/specials" className="hover:text-green-500">Special
									Offers</a></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-600">Customer Service</h3>
							<ul className="mt-2 space-y-2 gray-text">
								<li><a href="/contact" className="hover:text-green-500">Contact Us</a></li>
								<li><a href="/faq" className="hover:text-green-500">FAQ</a></li>
								<li><a href="/returns" className="hover:text-green-500">Returns & Refunds</a></li>
								<li><a href="/shipping" className="hover:text-green-500">Shipping Information</a></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-green-600">Company</h3>
							<ul className="mt-2 space-y-2 gray-text">
								<li><a href="/about-us" className="hover:text-green-500">About Us</a></li>
								<li><a href="/privacy" className="hover:text-green-500">Privacy Policy</a></li>
								<li><a href="/terms" className="hover:text-green-500">Terms & Conditions</a></li>
								<li><a href="/support" className="hover:text-green-500">Support Center</a></li>
							</ul>
						</div>
						<div className="footer-link-widget widget-install-app col">
							<h3 className="text-lg font-semibold text-green-600">Download app on</h3>
							<p className="gray-text my-4">From App Store or
								Google Play</p>
							<div className="download-app flex flex-row">
								<a href="#" className="hover-up">
									<img className="active w-70"
										 src={AppStore}
										 alt=""/></a>
								<a href="#" className="hover-up mb-sm-2">
									<img className="w-70" src={GooglePlay}
										 alt=""/>
								</a>
							</div>
							<p className="gray-text my-4">Secured Payment Gateways</p>
							<img className="wow fadeIn animated animated"
								 src={Payment}
								 alt=""/>
						</div>
					</div>
					<hr/>
					<div className="grid grid-cols-2 gap-4 w-full">
						<div className="text-gray-500 text-sm">
							&copy; {new Date().getFullYear()} FreshMarket. All rights reserved.
						</div>
						<div className="flex flex-wrap mr-10 justify-end">
							<h3 className="text-lg text-gray-800">Follow Us</h3>
							<div className="flex space-x-4 ml-10">
								<a href="#" className="text-gray-500 hover:text-green-500">
									<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										 width="100" height="100" viewBox="0,0,256,256">
										<g fill="#16A34A" fillRule="nonzero" stroke="none" strokeWidth="1"
										   strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
											<g transform="scale(5.12,5.12)">
												<path
													d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
											</g>
										</g>
									</svg>
								</a>
								<a href="#" className="text-gray-500 hover:text-green-500">
									<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
										 width="100" height="100" viewBox="0,0,256,256">
										<g
											fill="#16A34A"
											fillRule="nonzero"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											style={{mixBlendMode: 'normal'}}
										>
											<g transform="scale(5.33333,5.33333)">
												<path
													d="M1.989,23.987c0,-12.144 9.857,-22 22.001,-22c12.144,0 22.001,9.856 22.001,22c0,11.125 -8.273,20.331 -18.997,21.797v-15.78h5.001l1,-6h-5v1.5c0,0.276 -0.225,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l-0.001,-5.5c0,-1.653 1.344,-3 3.001,-3h3v-6h-3c-4.968,0 -9.001,4.031 -9.001,9.001v3.999h-4.999v6h4v-1.5c0,-0.275 0.224,-0.5 0.5,-0.5c0.275,0 0.5,0.225 0.5,0.5l-0.001,17.281c-10.729,-1.462 -19.005,-10.668 -19.005,-21.798zM10.971,10.666c1.156,-1.359 3.019,-2.088 5.184,-2.705c0.483,-0.167 0.723,-0.423 0.8,-0.759c0.124,-0.537 -0.213,-1.076 -0.749,-1.2c-0.136,-0.031 -0.269,-0.032 -0.503,0.02c-2.889,0.573 -5.295,2.856 -5.608,4.215c-0.06,0.26 0.107,0.539 0.376,0.6c0.191,0.045 0.384,-0.028 0.5,-0.171zM23.982,46.998c9.941,0 18.011,0.225 18.011,0.501c0,0.276 -8.069,0.501 -18.011,0.501c-9.941,0 -18.011,-0.225 -18.011,-0.501c0,-0.276 8.07,-0.501 18.011,-0.501z"></path>
											</g>
										</g>
									</svg>
								</a>
								<a href="#" className="text-gray-500 hover:text-green-500">
									<svg className="w-6 h-6" fill="#16A34A" viewBox="0 0 24 24">
										<path
											d="M23.954 4.57c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.197-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124-4.087-.205-7.72-2.165-10.148-5.144-.422.722-.664 1.562-.664 2.462 0 1.7.87 3.2 2.188 4.076-.807-.026-1.566-.247-2.228-.616v.061c0 2.376 1.693 4.358 3.946 4.81-.413.111-.848.171-1.296.171-.318 0-.627-.03-.928-.088.626 1.956 2.445 3.379 4.6 3.422-1.687 1.322-3.81 2.11-6.122 2.11-.398 0-.79-.023-1.176-.068 2.182 1.4 4.768 2.216 7.548 2.216 9.057 0 14.007-7.496 14.007-13.986 0-.21-.005-.423-.014-.633.962-.694 1.8-1.562 2.462-2.549z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="font-sm flex justify-end">Up to 15% discount on your first subscribe</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
