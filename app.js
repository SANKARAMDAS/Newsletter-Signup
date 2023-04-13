const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function (req, res){
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', function (req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);

})

app.listen(8080, function (){
    console.log('Server is up 8080');
})

//ee8e4482d4758d1951764c20f6e9b525-us21
//32130f36fc