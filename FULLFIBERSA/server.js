const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/src'));
app.get('/',function(req,res){
    res.sendFile(path.join('/src/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Node app is running at:" + process.env.path + app.get('port'));
  });