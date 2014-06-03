//GET     /datatypes                  ->  index
//GET     /datatypes/new              ->  new
//POST    /datatypes                  ->  create
//GET     /datatypes/:datatype        ->  show
//GET     /datatypes/:datatype/edit   ->  edit
//PUT     /datatypes/:datatype        ->  update
//PATCH   /datatypes/:datatype        ->  patch
//DELETE  /datatypes/:datatype        ->  destroy

exports.index = function(req, res){
  console.log("GET (index): " + JSON.stringify(req.headers));

  //res.send('index datatypes');
  res.json([
      { "datatype": "OpenSSL" },
      { "datatype": "EAP" }
  ]);
};

exports.new = function(req, res){
  console.log("GET (new), header:" + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));
  res.send('new datatypes');
};

exports.create = function(req, res){
  console.log("POST (create): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('create datatypes ' + req.params.datatypes);
};

exports.show = function(req, res){
  console.log("GET (show): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('show datatypes ' + req.params.datatypes);
};

exports.edit = function(req, res){
  console.log("GET (edit): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('edit datatypes ' + req.params.datatypes);
};

exports.update = function(req, res){
  console.log("PUT (update): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('update datatypes ' + req.params.datatypes);
};

exports.patch = function(req, res){
  console.log("PATCH (patch): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('patch datatypes ' + req.params.datatypes);
};

exports.destroy = function(req, res){
  console.log("DELETE (destroy): " + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));

  res.send('destroy datatypes ' + req.params.datatypes);
};