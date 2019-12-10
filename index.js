const express = require('express')
const port = process.env.PORT || 3000
const app = express()

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false });


var mongoose = require('mongoose');

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
app.post('/contact', urlencodedParser, (req, res)=>{
  console.log(req.body)
  res.send('success');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})