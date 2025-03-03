const express = require('express')
const router = express.Router()
const Product = require("../model/product")


router.get('', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        res.json(foundProducts);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send({ message: 'Failed to fetch products' });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId
        const foundProduct = await Product.findById(productId);
        res.json(foundProduct);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(422).send({ errors: [{ title: 'Product error', detail: 'Product not found!' }] });
    }
});

module.exports = router