const express = require('express');
const router = express.Router();

const prod_controller = require('../controllers/product.controller');
 

//-- GET Product List 
router.get('/', prod_controller.get_all);
//-- GET Product By Id
router.get('/:id', prod_controller.get_by_id);
// -- ADD NEW Product
router.post('/', prod_controller.add);
//-- Update Product By Id
router.put('/:id', prod_controller.update);
//-- Remove All Products
router.delete('/',prod_controller.remove_all)
//-- Remove Product By Id
router.delete('/:id', prod_controller.remove_by_id);


module.exports = router;
