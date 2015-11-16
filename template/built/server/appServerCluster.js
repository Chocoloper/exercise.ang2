var cluster = require('cluster');
var expressServer = require('./expressServer');
var cpuCount = require('os').cpus().length;
var serverCluster = function () {
    if (cluster.isMaster) {
        for (var i = 0; i < cpuCount; ++i) {
            cluster.fork();
        }
        cluster.on('death', function (worker) {
            console.log('Worker' + worker.pid + 'died! Creating a new Worker!');
            cluster.fork();
        });
    }
    else {
        expressServer.initExpressServer();
    }
};
exports = module.exports = {
    serverCluster: serverCluster
};
