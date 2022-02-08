const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/src/app/Componentes/ingreso/ingreso.component.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Node app is running at:" + process.env.path + app.get('port'));
  });