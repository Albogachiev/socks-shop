const express = require('express');
const router = express.Router();
const { CartPageControler, Order } = require('../controllers/cartContrioler');

router.get('/', CartPageControler);  
router.post('/', Order);  
//router.delete('/:id', SocsDelete); 

module.exports = router;
