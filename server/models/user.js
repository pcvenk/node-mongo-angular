/**
 * Created by Primoz on 22/09/16.
 */

var mongoose = require('mongoose');

var schema   = new mongoose.Schema({

    name        :   String,
    surname     :   String,
    email       :   String,
    role        :   String,
    dateCreated :   { type:Date, default:Date.now }
    // images      :   {type: mongoose.Schema.Types.ObjectId, ref: 'Image'}


});

mongoose.model('User', schema);