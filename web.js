
/* Web
 * Simple web server
 */

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Sorry, all I do right now is collect data!');
});

module.exports.start = function() {
  app.listen(process.env.PORT || 8000, function() {
    console.log('Listening on port ' + process.env.PORT || 8000);
  });
};
