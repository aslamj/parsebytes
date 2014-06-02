//GET     /parsebytes                   ->  index
//GET     /parsebytes/new               ->  new
//POST    /parsebytes                   ->  create
//GET     /parsebytes/:parsebyte        ->  show
//GET     /parsebytes/:parsebyte/edit   ->  edit
//PUT     /parsebytes/:parsebyte        ->  update
//PATCH   /parsebytes/:parsebyte        ->  patch
//DELETE  /parsebytes/:parsebyte        ->  destroy

exports.index = function(req, res){
  console.log("GET (index): " + JSON.stringify(req.headers));

  //res.send('index parsebytes');
  res.json({
    "datatypes": [
      { "datatype": "OpenSSL" },
      { "datatype": "EAP" }    
    ],
    "data": "",
    "results": ""
  });
};

exports.new = function(req, res){
  console.log("GET (new), header:" + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('new parsebytes');
};

var id = 100;

exports.create = function(req, res){
  console.log("POST (create): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('create parsebytes ' + req.params.parsebytes);
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