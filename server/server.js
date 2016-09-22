/**
 * Created by Primoz on 22/09/16.
 */

var express  = require('express');
var app      = express();

var router   = require('./router');

//setting up Heroku environment
const PORT = process.env.PORT || 3000;

module.exports = {

    start: function(){

        app.use('/', express.static('public'));
        app.use('/app', express.static('app'));

        // app.get('/', function(req, res){
        //
        //     res.send('Hello World');
        //
        // });

        app.listen(PORT, function(){

            console.log('Server running on ' + PORT);

            router(app);

        });


    },
    stop: function(){

    }

};