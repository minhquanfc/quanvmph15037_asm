var express = require('express');
var router = express.Router();
var userC = require('../controllers/user.controller');
const BookModel = require("../models/book.model");

var AuthMiddleware = require('../middleware/auth.midllware')

/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.render('index', { title: 'Express' },
    var listBook = await BookModel.find();
    res.render('index', {
        listBook: listBook
    });
});

router.get('/login',AuthMiddleware.ChuaDangNhap,userC.getFormLogin);
router.get('/register',AuthMiddleware.ChuaDangNhap,userC.getFormRegister);

router.post('/login',AuthMiddleware.ChuaDangNhap,userC.postLogin);
router.post('/register',AuthMiddleware.ChuaDangNhap,userC.postRegister)


module.exports = router;
