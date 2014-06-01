/*
 * GET api listing.
 */

exports.api = function(req, res){
  console.log(req);
  console.log(res);

  var sys = require('sys');
  var exec = require('child_process').exec;

  //function puts(error, stdout, stderr) { 
  //  sys.puts(stdout);
  //}
  
  var cmd = "openssl x509 -inform PEM -in data/input/www.mozilla.org -text";

  exec(cmd, function(error, stdout, stderr) {
    
    sys.puts(stdout);
    var output = stdout.replace(/\n/g, '</br>');
    output = output.replace(/ /g, '&nbsp;');
    res.send(output);
  });

  //res.send("api service");
};