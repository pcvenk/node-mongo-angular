/**
 * Created by Primoz on 22/09/16.
 */
var mongoose = require('mongoose');

module.exports = function(app){

    //API routes

    app.get('/api/users', function(req, res){

        var User = mongoose.model('User');

        User.find(function(err, docs){

            if(!err){
                res.send(docs);
            }else{
                console.log(err);
            }

        });

    });

    app.post('/api/user', function(req, res){

        var User = mongoose.model('User');

        var user = new User(req.body);

        user.save(function(err, docs){

            if(!err){
                res.status(200).send(docs);
            }else{
                res.send(err);
            }

        });

    });

};
