
/**
 * Module dependencies.
 */

var express = require('express');
var resource = require('express-resource');
var routes = require('./routes');
var user = require('./routes/user');
//var api = require('./routes/api');
var http = require('http');
var path = require('path');

var app = express();

app.engine('html', require('hogan-express'));

// all environments
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
//app.get('/api', api.api);
app.resource('api/datatypes', require('./resources/datatypes'));
app.resource('api/parsebytes', require('./resources/parseBytes'));

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
