// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/fruitvegmarke', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Connected to MongoDB');
}).catch(err => {
	console.error('Connection error', err);
});

app.use(express.json());
app.use(cors()); // Use the cors middleware

// Serve static images from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a Schema and Model
const productSchema = new mongoose.Schema({
name: String,
type: String,
description: String,
price: Number,
image: String,
});

const Product = mongoose.model('Product', productSchema);

// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
try {
	// Fetch all products from the database (await => asynchronous)
	const allProducts = await Product.find();

	// Modify response to include full image path
	const productsWithFullPath = allProducts.map(product => ({
		...product._doc,
		image: `http://localhost:${PORT}${product.image}`
	}));

	// Send the entire products array as JSON response
	res.json(productsWithFullPath);
} catch (error) {
	console.error(error);
	res.status(500)
	.json({ error: 'Internal Server Error' });
}
});

app.listen(PORT, () => {
console.log(
	`Server is running on port ${PORT}`
);
});
