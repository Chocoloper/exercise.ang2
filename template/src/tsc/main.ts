var test = require('./server/appServerCluster');

var config;
var cluster = require('cluster');
if (cluster.isMaster) {
  process.env.PROJECT_ROOT = __dirname.substring(0, __dirname.lastIndexOf('/'));
  process.env.PORT = process.env.PORT || 8080;
  console.log(JSON.stringify(process.env, null, 2));
  console.log();
}
test.serverCluster();
