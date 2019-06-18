const express = require('express');
const app = express();
const mongodb = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());

mongodb.connect('mongodb://127.0.0.1:27017/afsis',{useNewUrlParser:true});
const connection = mongodb.connection;

connection.once('open',function () {
    console.log("MongoDB connection established");

});

app.listen(PORT, function(){

    console.log("Server is running on port: "+ PORT);
});