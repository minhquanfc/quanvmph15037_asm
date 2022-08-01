var express = require('express');
var router = express.Router();
var apiC = require('../controllers/apitruyen.controller');

router.get('/truyen/get-all',apiC.GetAll);
router.get('/truyen/get-one/:id',apiC.GetOne);

router.get('/users/get-all',apiC.GetUsers);
module.exports = router;