const express= require('express');
const router = express.Router();
const {home} = require('../controllers/mainController');
const {about} = require('../controllers/mainController');

router.get('/',home);
router.get('/about',about)

module.exports = router;