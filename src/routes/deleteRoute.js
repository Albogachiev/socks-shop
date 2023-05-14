const router = require('express').Router();
const deleteController = require('../controllers/deleteController');

router.delete('/deleteFav', deleteController);

module.exports = router;
