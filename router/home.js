const ejs = require('ejs');
const path = require('path');
const express =require('express');
const Router = express.Router();




Router.use('/', async function(req, res, next){
    const filePath = '../public/home';

    if(req.path == '/'){
        const template = path.join(__dirname,filePath+'/index.ejs');
        const html = await ejs.renderFile(template, {

        });
        res.send(html);
    } else {
        express.static(path.join(__dirname,filePath))(req,res,next);
    };
});

module.exports = Router;