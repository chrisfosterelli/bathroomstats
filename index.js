
/* KIC Bathrooms
 * Monitor the KIC bathroom statistics
 * http://kamlooopsinnovation.ca
 */

var worker = require('./worker');
var web    = require('./web');

worker.start();
web.start();
