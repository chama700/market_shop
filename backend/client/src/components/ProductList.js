import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { itemContext } from '../context/ItemContext';
import FilterSection from './FilterSection';

const ProductList = () => {
	const { products } = useContext(itemContext);
	const [sortedProducts, setSortedProducts] = useState([...products]);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(3000);
	const [selectedType, setSelectedType] = useState('all');
	const [sortDirection, setSortDirection] = useState('lowToHigh');

	useEffect(() => {
		setSortedProducts([...products]);
	}, [products]);

	const handleSortByPrice = () => {
		const sorted = [...sortedProducts].sort((a, b) => {
			if (sortDirection === 'lowToHigh') {
				return a.price - b.price;
			} else {
				return b.price - a.price;
			}
		});
		setSortedProducts(sorted);
		setSortDirection(sortDirection === 'lowToHigh' ? 'highToLow' : 'lowToHigh');
	};

	const handleFilterByPriceRange = () => {
		const filtered = products.filter(
			(product) => product.price >= minPrice && product.price <= maxPrice
		);
		setSortedProducts(filtered);
	};

	const handleFilterByType = () => {
		if (selectedType === 'all') {
			setSortedProducts([...products]);
		} else {
			const filtered = products.filter(
				(product) => product.type === selectedType
			);
			setSortedProducts(filtered);
		}
	};

	return (
		<div className="flex space-x-6">
			<FilterSection
				minPrice={minPrice}
				maxPrice={maxPrice}
				selectedType={selectedType}
				setMinPrice={setMinPrice}
				setMaxPrice={setMaxPrice}
				setSelectedType={setSelectedType}
				handleSortByPrice={handleSortByPrice}
				handleFilterByPriceRange={handleFilterByPriceRange}
				handleFilterByType={handleFilterByType}
			/>

			<div className="flex-1">
				<ul className="grid grid-cols-4 item-card w-full">
					{sortedProducts.map((product) => (
						<ProductItem key={product._id} product={product} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductList;
