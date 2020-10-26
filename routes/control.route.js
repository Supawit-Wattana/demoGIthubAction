const express = require('express');
const router = express.Router();

const ctrl_controller = require('../controllers/ctrl.controller');
 

//-- Import mock Customer List 
router.post('/customers', ctrl_controller.load_customers);

//-- Import mock Product List 
router.post('/products', ctrl_controller.load_products);

//-- Import mock Supplier List 
router.post('/suppliers', ctrl_controller.load_suppliers);

//-- Import mock Transacton List 
router.post('/transactions', ctrl_controller.load_transactions);

module.exports = router;
