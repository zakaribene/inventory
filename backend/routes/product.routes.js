import express from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

//create a product
router.post('/', createProduct);

//get all products
router.get('/', getProducts);


//get a product by id
router.get('/:id', getProductById);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);

export default router;

