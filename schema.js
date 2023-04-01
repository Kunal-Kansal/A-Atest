const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    login:{type: String , required:true},
    password:{type:String,required:true}
})

const ID = mongoose.model('token',schema)

module.exports = ID;