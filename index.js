var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync('./index.html');
  var strvar = buffer.toString();
  response.send(strvar);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
