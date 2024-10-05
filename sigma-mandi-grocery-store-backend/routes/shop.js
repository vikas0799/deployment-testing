const express = require('express')

const {
    getProducts,
    getProduct,
    createProducts
} = require('../controllers/shopController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//GET all products
router.get('/allproducts', getProducts)

//GET one product
router.get('/:id', getProduct)

router.get('/productform', requireAuth, (req, res) => {
    // Check the user's role here
    if (req.user.userType === 'Vendor') {
        // Render the product form for vendors
        res.render('productform');
    } else {
        // No access to roles except vendor wala
        res.status(403).json({ error: 'Access Forbidden' });
    }
});

//POST a new product
router.post('/addproducts', createProducts)

//require auth for all routes
router.use(requireAuth)

module.exports = router