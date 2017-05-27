const express = require('express');
var mongoose = require('mongoose');

const planecharter = require('./schema.js');

const app = express();

console.log("WORK");

mongoose.disconnect();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Admin:dev@ds013414.mlab.com:13414/davai');


app.get('/DOGS', function(req, res) {
	res.send("DOGOGOOS");
});

app.listen(8000);

 