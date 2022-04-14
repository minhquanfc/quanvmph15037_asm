const fs = require("fs");
const BookModel = require("../models/book.model");

//get add
exports.getFormAdd = (req, res, next) => {
    res.render('./products/add');
}

exports.postAddBook = (req, res, next) => {
    console.log(req.body);
    if (req.body.tentruyen.length==0 && req.body.noidung.length==0 && req.body.tacgia == 0){
        return res.render('./products/add',{msg:'Vui lòng không để trống'})
    }
    //tao doi tuong de gan du lieu user gui len server
    const objBook = new BookModel({
        tentruyen:req.body.tentruyen,
        tacgia:req.body.tacgia,
        noidung:req.body.noidung,
        anh_truyen:req.body.anh_truyen
    });

    //ghi vao csdl
    objBook.save(function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Them thanh cong")
        }
    });

    res.redirect('/products/add')
}

//get list
exports.getlistBook = async (req, res, next) => {
    var listBook = await BookModel.find();
    res.render('./products/list', {
        listBook: listBook
    });
}

// edit
exports.getFormEdit = async (req,res,next)=>{
    console.log(req.params)
    //
    let itemBook = await BookModel.findById(req.params.id)
        .exec()
        .catch(function (err){
            console.log(err)
        });
    console.log(itemBook);
    if (itemBook==null){
        res.send('Khong tim thay')
    }
    res.render('./products/edit',{itemBook:itemBook})
}

//post edit
exports.postEdit=(req,res,next)=>{
    console.log(req.params);

    let dieu_kien ={
        _id : req.params.id // lay id tren thanh dia chi
    }
    let du_lieu = {
        tentruyen: req.body.tentruyen,
        tacgia:req.body.tacgia,
        noidung: req.body.noidung,
        anh_truyen:req.body.anh_truyen
    }

    //goi lenh update
    BookModel.updateOne(dieu_kien,du_lieu,function (err,res){
        if (err)
        {
            console.log("Loi update"+err.message,{msg:'Lỗi update'})
        }
    })
    res.redirect('/products')
}
//xoa
exports.postDelete=(req,res,next)=>{
    console.log(req.params);
    let dieu_kien ={
        _id : req.params.id // lay id tren thanh dia chi
    }

    //goi lenh update
    BookModel.deleteOne(dieu_kien,function (err){
        if (err)
        {
            console.log("Loi delete"+err.message)
        }else {
            console.log('Xoa thanh cong')
        }
    })
    res.redirect('/products')
}

//Anh
exports.postUpload = (req, res, next) => {
    console.log(req.file);
    fs.rename(req.file.destination + req.file.filename,
        './public/uploads/' + req.file.originalname,
        function (err) {
            if (err) {
                console.log(err)
            }
        }
    )
    res.redirect('/products/add');
}

//get posttruyen
exports.getPostTruyen= async (req,res,next)=>{
    let itemTruyen = await BookModel.findById(req.params.id)
        .exec()
        .catch(function (err){
            console.log(err)
        });
    console.log(itemTruyen);
    if (itemTruyen==null){
        res.send('Khong tim thay')
    }
    res.render('./products/post',{itemTruyen:itemTruyen});
}