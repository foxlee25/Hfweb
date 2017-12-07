const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('server started on 3000');
});