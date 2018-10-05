
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/weather.html')
});
app.get('/contact', function (req, res) {
    res.send('CONTACT PAGE')
  });
  app.get('/profile/:name',function(req,res){
      res.send('hi this is profile page of    '+req.params.name);

  });
 
app.listen(3000)