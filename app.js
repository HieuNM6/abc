var express = require('express');
var router = require('express-nested-router');
var app = express();

var routes = router.namespace({
  index: function(req, res, next){
    res.send("index");
  },
  api: require('./api/index')(router)
});

routes.resolve(app);

app.listen(3000, function(){
  console.log("app running on port 3000");
});