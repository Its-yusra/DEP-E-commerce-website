const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 5001;
const uri = 'mongodb://localhost:27017/ClothesEcommerce'; // Your local MongoDB connection string

app.use(cors());
app.use(express.json());

// Connect to MongoDB with error handling
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
        process.exit(1); // Exit the process with failure
    });

// Define product schema and model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// Get all products with error handling
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving products', error: err.message });
    }
});

// Add a new product with error handling
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(400).json({ message: 'Error adding product', error: err.message });
    }
});

// Handle 404 errors for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Handle other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server with error handling
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}).on('error', (err) => {
    console.error('Failed to start server', err);
    process.exit(1); // Exit the process with failure
});
fetch('http://localhost:5001/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
