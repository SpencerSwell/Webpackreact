const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

const planecharter = require('./schema.js');

const app = express();

console.log("WORK");

mongoose.disconnect();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Admin:dev@ds013414.mlab.com:13414/davai');

app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



app.get('/getFlightData', (req, res) => {
   console.log(req);
planecharter
	.findOne()
	.exec()
	.then(planes =>  {
		console.log(planes);
		console.log(res.body);
		res.status(200).send(planes);
	});
	
});


app.get('/DOGS', function(req, res) {
	res.send("DOGOGOOS");
});

app.listen(8000);

 