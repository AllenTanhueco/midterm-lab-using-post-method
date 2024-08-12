var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res ){
   
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        gender:req.body.gender,
        address:req.body.address,
        Student_number:req.body.Student_number,
        Student_section:req.body.Student_section,
        Year_level:req.body.Year_level
    
};
    console.log(response) ;
    res.end(JSON.stringify(response) );

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});