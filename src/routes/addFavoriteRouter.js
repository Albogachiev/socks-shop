const router = require('express').Router();

const { addFavorite } = require('../controllers/addFavoriteController')

router.post('/', addFavorite)

module.exports = router;
