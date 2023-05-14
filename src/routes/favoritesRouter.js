const router = require('express').Router();

const { renderFavoritesController } = require('../controllers/favoritesController')

router.get('/', renderFavoritesController); 
//router.delete('/:id', SocsDelete); 

module.exports = router;
