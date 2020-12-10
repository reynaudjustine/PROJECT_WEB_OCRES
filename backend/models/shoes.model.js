const mongoose = require('mongoose');

const shoes = new mongoose.Schema({
    modele:{
        type : String,
        required:true,
    },
    prix:{
        type : Number,
        required: true,
    },
    genre:{
        type:String,
        required:true,
    },
    categorie:{
        type:String,
        required:true,
    },
    marque:{
        type:String,
        required:true,
    },
    pdv:{
        type:String,
        required:true,
    },
    mdv:{
        type:String,
        required:true,
    }

},{collection:"Shoes"})
module.exports = mongoose.model('Shoe', shoes);