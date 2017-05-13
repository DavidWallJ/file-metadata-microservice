/**
 * Created by david on 5/13/17.
 */
/**
 * Created by david on 5/2/17.
 */
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
// cors has something to do avoiding cross regional issues
app.use(cors());
app.use(express.static(__dirname + '/public'));


// connect to mongodb via mongoose
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
    console.log(req.body.title); //form fields
    /* example output:
     { title: 'abc' }
     */
    console.log(req.file.size); //form files
    /* example output:
     { fieldname: 'upl',
     originalname: 'grumpy.png',
     encoding: '7bit',
     mimetype: 'image/png',
     destination: './uploads/',
     filename: '436ec561793aa4dc475a88e84776b1b9',
     path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
     size: 277056 }
     */
    res.status(204).end();
});



app.listen(PORT, function () {
    console.log('Listening on port 3000!')
});