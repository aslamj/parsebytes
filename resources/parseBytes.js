//GET     /parsebytes                   ->  index
//GET     /parsebytes/new               ->  new
//POST    /parsebytes                   ->  create
//GET     /parsebytes/:parsebyte        ->  show
//GET     /parsebytes/:parsebyte/edit   ->  edit
//PUT     /parsebytes/:parsebyte        ->  update
//PATCH   /parsebytes/:parsebyte        ->  patch
//DELETE  /parsebytes/:parsebyte        ->  destroy

var uuid = require('node-uuid');
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;

exports.index = function(req, res){
  console.log("GET (index): " + JSON.stringify(req.headers));

  res.send('index parsebytes');
};

exports.new = function(req, res){
  console.log("GET (new), header:" + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('new parsebytes');
};

exports.create = function(req, res){
  console.log("POST (create): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  var clientIP = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  var guid =uuid.v1();
  var filename = './tmp/data/'+ clientIP + '_' + guid;
  console.log(filename);

  req.body.data = req.body.data.trim();
  fs.writeFile(filename, req.body.data, function(error) {
    if (error) {
      console.log(error);
      res.send(JSON.stringify({'results': error}));
      return;
    }

    console.log(filename + ' saved successfully');

    var  osslTool = '';
    if (req.body.data.indexOf('-----BEGIN CERTIFICATE REQUEST-----') >= 0) {
      osslTool = 'req';
    } else if (req.body.data.indexOf('-----BEGIN CERTIFICATE-----') >= 0) {
      osslTool = 'x509';
    } else if (req.body.data.indexOf('-----BEGIN X509 CRL-----') >= 0) {
      osslTool = 'crl';
    } else if (req.body.data.indexOf('-----BEGIN PKCS7-----') >= 0) {
      osslTool = 'pkcs7';
    } else if (req.body.data.indexOf('-----BEGIN PKCS12-----') >= 0) {
      osslTool = 'pkcs12';
    } else if (req.body.data.indexOf('-----BEGIN RSA PRIVATE KEY-----') >= 0) {
      osslTool = 'rsa';
    } else if (req.body.data.indexOf('-----BEGIN DSA PRIVATE KEY-----') >= 0) {
      osslTool = 'dsa';
    } else {
      res.send(JSON.stringify({'results': 'Bad input'}));
      return;
    }

    var cmd = 'openssl ' + osslTool + ' -inform PEM -in ' + filename + ' -text -noout';
    console.log(cmd);

    exec(cmd, function(error, stdout, stderr) {
      sys.puts('error: ' + error);
      sys.puts('stdout: ' + stdout);
      sys.puts('stderr: ' + stderr);
      var output = {
        'results': (stdout.trim().length > 0) ? stdout.trim() : stderr.trim()
      };
      res.send(JSON.stringify(output));

      // delete temp data file
      fs.unlink(filename);
    });
  });

  //res.send('create parsebytes ' + clientIP);
};

exports.show = function(req, res){
  console.log("GET (show): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('show parsebytes ' + req.params.parsebytes);
};

exports.edit = function(req, res){
  console.log("GET (edit): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('edit parsebytes ' + req.params.parsebytes);
};

exports.update = function(req, res){
  console.log("PUT (update): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('update parsebytes ' + req.params.parsebytes);
};

exports.patch = function(req, res){
  console.log("PATCH (patch): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('patch parsebytes ' + req.params.parsebytes);
};

exports.destroy = function(req, res){
  console.log("DELETE (destroy): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('destroy parsebytes ' + req.params.parsebytes);
};