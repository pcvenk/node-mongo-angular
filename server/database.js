/**
 * Created by Primoz on 22/09/16.
 */

var db = require('mongoose');

exports.connect = function(success){

    //db stored remote on heroku with mongolab
    db.connect('mongodb://admin:mojegeslo@ds035776.mlab.com:35776/heroku_h1qgfjsm');
    //db stored localy on localhost
    // db.connect('mongodb://localhost/sample-db');

    db.connection.on('error', function(error){

       console.log(error);

    });

    db.connection.once('open', function(){

        if(success){

            success();
        }

       console.log('Database running');

    });

};