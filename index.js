var express = require('express');
var app =  express();
var PORT = process.env.PORT || 8080;

app.use(express.static("build"));

app.listen(PORT,function(){
  console.log('Server running on:: '+PORT);
});
