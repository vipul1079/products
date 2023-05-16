const express=require('express');
const productController=require('../controllers/products');

const productRouter=express.Router();


productRouter.post("/", productController.createProduct)
.get('/',productController.getAllProducts)
.get('/:id',productController.getProduct)
.put('/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct);

exports.productRouter=productRouter;