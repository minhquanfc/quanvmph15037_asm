var bookModel = require('../models/book.model');
var userModel = require('../models/user.model');
const BookModel = require("../models/book.model");
exports.GetAll = async (req,res,next)=>{
    var listTruyen = await bookModel.find();
    res.json(listTruyen);
}
exports.GetOne = async (req,res,next)=>{
    let itemBook = await BookModel.findById(req.params.id)
        .exec()
        .catch(function (err){
            console.log(err)
        });
    console.log(itemBook);
    if (itemBook==null){
        res.send('Khong tim thay')
    }
    res.send(itemBook);
}

//get user
exports.GetUsers = async (req,res,next)=>{
    var listUser = await userModel.find();
    res.json(listUser);
}