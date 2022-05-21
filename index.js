require('dotenv').config();
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8797;
const app = express();

const homeRouter = require('./router/home');
const shopRouter = require('./router/shop');
const storeRouter = require('./router/store');
const aboutRouter = require('./router/about');
const contactRouter = require('./router/contact');

app.use('/asset', express.static('./public/asset'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('/contact',contactRouter);
// app.use('/about',aboutRouter);
// app.use('/store',storeRouter);
// app.use('/shop',shopRouter);
app.use('/',homeRouter);

const server = app.listen(port, (err)=>{
    if(err){
        console.error(err);
    } else {
        console.log('server is listening to port '+port);
    };
});