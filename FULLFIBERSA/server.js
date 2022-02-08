const express = require('express');
const path = require('path');

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/fullfibersa'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/fullfibersa/' }
    );
});
/* app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/src/app/Componentes/ingreso/ingreso.component.html'));
}); */

app.listen(process.env.PORT || 3000, function () {
    console.log("Node app is running at:" + process.env.path + app.get('port'));
});