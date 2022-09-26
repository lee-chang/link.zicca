const express = require("express");
const path = require("path");



var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });

const PORT = process.env.PORT || 3000;
// Listen
app.listen(PORT,function(){
    console.log('Servidor listo en el puerto',PORT);
})
