var cluster = require('cluster');
var expressServer = require('./expressServer');

//amount of cpu cores
var cpuCount = require('os').cpus().length;

var serverCluster = function() {
  if (cluster.isMaster) {
    // "cpuCount - 1" can be really bad if you just have 1 Core
    for (var i = 0; i < cpuCount; ++i) {
      cluster.fork();
    }

    cluster.on('death', function(worker) {
      console.log('Worker' + worker.pid + 'died! Creating a new Worker!');
      cluster.fork();
    });

  } else {
    expressServer.initExpressServer();
  }
}

exports = module.exports = {
  serverCluster
};
