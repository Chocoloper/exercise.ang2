var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require("./routes");
var appserver = express();
var port = 8080;

appserver.use(bodyParser.json());
appserver.use(bodyParser.urlencoded({ extended: false }));
appserver.use((req, res, next) => {
  console.log(req.method+" "+req.protocol+"://"+req.hostname+req.path);
  next();
})
//Serve files
appserver.use(express.static(process.env.PROJECT_ROOT + '/dist'));
appserver.use(express.static(process.env.PROJECT_ROOT + '/views'));
appserver.use('/webapp',express.static(process.env.PROJECT_ROOT + '/built/webapp'));
//Serve angular2 dependencies
appserver.use('/angular2',express.static(process.env.PROJECT_ROOT + '/node_modules/angular2/bundles'));
appserver.use('/systemjs',express.static(process.env.PROJECT_ROOT + '/node_modules/systemjs/dist/'));
//Register express resources
appserver.use('/', routes);

  //Catch 404
appserver.use((req, res, next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
})

var initExpressServer = function() {
  appserver.listen(process.env.PORT);
  console.log('ExpressServerInstance listening on ' + process.env.PORT + '!')
}

exports = module.exports = {
  appserver,
  initExpressServer
};