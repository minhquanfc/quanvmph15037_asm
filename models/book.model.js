const mongoose = require('mongoose');
const url = "mongodb+srv://minhquanfc:Minhquanfcpro68@cluster0.a207y.mongodb.net/BookShop?retryWrites=true&w=majority";

mongoose.connect(url);

const  bookSchema = new mongoose.Schema({
    tentruyen:'String',
    noidung:'String',
    anh_truyen:'String'
});
//dinh nghia xong 1 vai schema
//tao ra 1 ban sao bookshema
const  Book = mongoose.model("Book",bookSchema);
module.exports= Book;//export ra de su dung o controller