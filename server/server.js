/**
 * Created by Primoz on 22/09/16.
 */

var express  = require('express');
var app      = express();

//setting up Heroku environment
const PORT = process.env.PORT || 3000;

module.exports = {

    start: function(){

        app.use('/', express.static('public'));

        // app.get('/', function(req, res){
        //
        //     res.send('Hello World');
        //
        // });

        app.listen(PORT, function(){

            console.log('Server running on ' + PORT);

        });


    },
    stop: function(){

    }

};