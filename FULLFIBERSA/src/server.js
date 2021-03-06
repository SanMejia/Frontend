const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});

app.listen('0.0.0.0', process.env.PORT || 3000, function(){
    console.log("Node app is running at localhost:" + app.get('port'));
  });