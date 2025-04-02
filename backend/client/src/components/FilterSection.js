import React from 'react';

const FilterSection = ({
       minPrice,
       maxPrice,
       selectedType,
       setMinPrice,
       setMaxPrice,
       setSelectedType,
       handleSortByPrice,
       handleFilterByPriceRange,
       handleFilterByType
   }) => {

    const resetFilters = () => {
        setMinPrice(0);
        setMaxPrice(3000);
        setSelectedType('all');

        handleFilterByPriceRange();
        handleFilterByType();
    };

    return (
        <div className="filter-section h-1/4 p-5 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-green-700">Filters</h2>
            <div className="grid grid-rows-4">
            <div className="my-4">
                <h3 className="text-sm font-semibold text-gray-700">Price Range</h3>
                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="p-2 border rounded-md w-1/2"
                        placeholder="Min Price"
                    />
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="p-2 border rounded-md w-1/2"
                        placeholder="Max Price"
                    />
                </div>
                <button
                    onClick={handleFilterByPriceRange}
                    className="mt-3 w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-500"
                >
                    Apply Price Filter
                </button>
            </div>

            <div className="my-4">
                <h3 className="text-sm font-semibold text-gray-700">Product Type</h3>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="p-2 border rounded-md w-full"
                >
                    <option value="all">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <button
                    onClick={handleFilterByType}
                    className="mt-3 w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-500"
                >
                    Apply Type Filter
                </button>
            </div>

            <div className="my-4">
                <h3 className="text-sm font-semibold text-gray-700">Sort By</h3>
                <button
                    onClick={handleSortByPrice}
                    className="w-full bg-gray-300 p-2 rounded-md hover:bg-gray-200"
                >
                    Price: Low to High
                </button>
                <button
                    onClick={handleSortByPrice}
                    className="mt-2 w-full bg-gray-300 p-2 rounded-md hover:bg-gray-200"
                >
                    Price: High to Low
                </button>
            </div>

            <div className="my-4">
                <button
                    onClick={resetFilters}
                    className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-500"
                >
                    Reset Filters
                </button>
            </div>
            </div>
        </div>
    );
};

export default FilterSection;
