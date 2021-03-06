/**
 * Created by david on 5/13/17.
 */
/**
 * Created by david on 5/2/17.
 */

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


// https://metadata-service-davidjwall.herokuapp.com/


app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){

    res.json({"fileSize": req.file.size});

});



app.listen(PORT, function () {
    console.log('Listening on port 3000!');
});