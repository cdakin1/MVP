var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
})

app.listen(port, function() {
  console.log("listening on " + port);
});

console.log('hello from node')
