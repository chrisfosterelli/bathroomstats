
/* Collector
 * Simple data collector
 */

var mongodb = require('mongodb');
var request = require('request');

function getData(db) {
  var opts = { url : process.env.URL, json : true };
  request(opts, function(err, response, body) {
    if (err || response.statusCode != 200) {
      console.log('Couldn\'t fetch data', err, response.statusCode);
      return;
    }
    var records = db.collection('records');
    var document = { time : new Date(), data : body };
    records.insert(document, function(err, result) {
      if (err) console.error('Couldn\'t store in DB', err);
      else console.log(JSON.stringify(document.data));
    });
  })
};

module.exports.start = function() {
  mongodb.MongoClient.connect(process.env.MONGO, function(err, db) {
    if (err) throw err;
    console.log('Connected to MongoDB'); 
    setInterval(function() {
      getData(db);
    }, 10 * 1000);
  });
};
