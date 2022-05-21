const ejs = require('ejs');
const path = require('path');
const express =require('express');
const Router = express.Router();




Router.use('/', function(req, res, next){
    const filePath = '../public/home';

    if(req.path == '/'){
        res.render('home',{});

    } else {
        express.static(path.join(__dirname,filePath))(req,res,next);
    };
});

module.exports = Router;