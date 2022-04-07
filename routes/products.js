var express = require('express');
var router = express.Router();
var bookC = require('../controllers/book.controller');
var  multer = require('multer');
var Authmidd = require('../middleware/auth.midllware');

router.get('/',Authmidd.YeuCauDangNhap,bookC.getlistBook);
router.get('/add',Authmidd.YeuCauDangNhap,bookC.getFormAdd);
router.post('/add',Authmidd.YeuCauDangNhap,bookC.postAddBook);
router.get('/edit/:id',Authmidd.YeuCauDangNhap,bookC.getFormEdit);
router.post('/edit/:id',Authmidd.YeuCauDangNhap,bookC.postEdit);
router.get('/delete/:id',Authmidd.YeuCauDangNhap,bookC.postDelete);

router.get('/post/:id',bookC.getPostTruyen);
var upload = multer({dest: './tmp/'}); //thet lap vi tri luu file tao
// router.post('/add',upload.single('fileanh'),truyenController.postUpload);

module.exports = router;