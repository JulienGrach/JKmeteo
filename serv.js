var express = require('express');
var appExpress = express();

appExpress.get('/', function(req, rep){
   rep.sendFile('app/index.html');
});

appExpress.listen(80, function(){
   console.log('Express run on port 80');
});