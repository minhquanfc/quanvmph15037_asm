var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');
var AuthMidd = require('../middleware/auth.midllware');
/* GET users listing. */
router.get('/',AuthMidd.YeuCauDangNhap,UserController.getUser);
router.get('/logout',UserController.Logout);
module.exports = router;
