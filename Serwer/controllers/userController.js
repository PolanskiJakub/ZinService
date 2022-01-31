const { body,validationResult } = require("express-validator");
const bcrypt = require('bcrypt')
const { register } = require("../../../Server-v2/controllers/userController");
var user = require('../models/user_model')
const saltRounds = 10;
var User = require('../models/user_model');

exports.login_get = function(req,res,next){
    res.render('User',{title:'Login'});
};

exports.login_post = function(req,res,next){
    const sendError = () => res.status(400).send({errors: ['Wrong username or password.']});
    if (!req.body.login || !req.body.password) return sendError();

    User.findOne({login: req.body.login},(err,obj)=>{
        if (err) return res.status(500).send(err);
        if (obj === null) return sendError();

        bcrypt.compare(req.body.password, obj.password, (err, result) => {
            if (err) return res.status(500).send(err);
            if (obj === null || !result) return sendError();
            res.redirect('/Zin');
        });
    });
}

exports.register_post=function(req,res,next){
    User.countDocuments({login: req.body.login},(err, count)=>{
        if(count){
            return res.status(400).send({errors: ['This username is already in use.']})
        }if(req.body.password.length < 8){
            return res.status(400).send({errors: ['Password need to be atleast 8 characters long']});
        } if(!/\d/.test(req.body.password)){
            return res.status(400).send({errors: ['Password need to contain atleast one number']});
        } else {
            bcrypt.hash(req.body.password,saltRounds,function(err,hash){

                var user = new User({
                    login : req.body.login,
                    password: hash
                })
                user.save();
                console.log('Added new user.')
                res.redirect('/catalog/login');
            })
            }
});
exports.przyklady_get = function(req,res){
    res.render('przyklady',{title:'Przyklady'});
};
exports.picture_get = function(req,res){
    res.render('przyklady',{title:'Przyklady'});
};
}