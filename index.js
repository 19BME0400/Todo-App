const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);

const db = require('./config/mongoose');



app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err) {
        console.log('Error in running the server', err);
    }

    console.log("Server is running on port:", port);
})