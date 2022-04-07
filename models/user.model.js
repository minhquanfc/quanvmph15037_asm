const mongoose = require('mongoose');
const url = "mongodb+srv://minhquanfc:Minhquanfcpro68@cluster0.a207y.mongodb.net/BookShop?retryWrites=true&w=majority";

mongoose.connect(url);

const userSchema = mongoose.Schema({
    username:'String',
    password:'String',
},{ collection: 'account' });

const User = mongoose.model('User',userSchema);
module.exports = User;