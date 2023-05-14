const router = require('express').Router();

const { renderRegistration, registrationUser } = require('../controllers/registrationController')
// const { checkUser } = require('../middlewares/common')

router.get('/', renderRegistration)
router.post('/', registrationUser)

module.exports = router;
