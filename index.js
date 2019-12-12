const express = require('express')
const port = process.env.PORT || 3000
const app = express()
//mongoose.Promise = global.Promise;
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true});

//app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var SaskModel = require('./models/sask.model')
var UserModel = require('./models/user.model')
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://electrical:elmongo@cluster0-7oxa5.mongodb.net/projectreena?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(express.static('public'))
app.set('view engine','pug')



app.get('/', (req, res) => {
  res.render('index', {});
});
app.get('/index', (req, res) => {
  res.render('index', {});
});
app.get('/event', (req, res) => {
  res.render('event',{})
});
app.get('/contact', (req,res) =>{
  res.render('contact',{})
});

app.post("/contact", urlencodedParser, (req, res) => {
  var myData = new UserModel(req.body);
  myData.save()
    .then(item => {
      res.redirect("/")
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})