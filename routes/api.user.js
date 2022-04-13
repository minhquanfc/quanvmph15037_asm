var express = require('express');
var router = express.Router();
var apiUser = require('../controllers/api.user.controller');
var auth = require('../middleware/api.auth.middleware');

router.post('/reg',apiUser.postReg);
router.post('/login',apiUser.postLogin);
router.get('/profile',auth,apiUser.getProfile);

module.exports = router;