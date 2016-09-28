/**
 * Created by Primoz on 22/09/16.
 */

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var session    = require('express-session');
var router     = require('./router');

//setting up Heroku environment
const PORT = process.env.PORT || 3000;

module.exports = {

    start: function(){

        app.use(bodyParser.urlencoded());
        app.use(bodyParser.json());

        app.use(session({
            genid: function(req) {
                return guid(); // use UUIDs for session IDs
            },
            //secret: 'lhdfs903wrodp89wfejo90qcisoj'
            secret: 'Starter app'
        }));

        app.use('/', express.static('public'));
        app.use('/app', express.static('app'));

        // app.get('/', function(req, res){
        //
        //     res.send('Hello World');
        //
        // });

        app.listen(PORT, function(){

            console.log('Server running on port' + PORT);

            router(app);

        });


    },
    stop: function(){

    }

};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}