/**
 * Created by Primoz on 22/09/16.
 */

var mongoose = require('mongoose');

var schema   = new mongoose.Schema({

    name:     String,
    surname:  String

});

mongoose.model('User', schema);