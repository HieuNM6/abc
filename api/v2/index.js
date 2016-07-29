/**
 * Created by GUMI-QUANG on 7/28/16.
 */
/**
 * Created by GUMI-QUANG on 7/28/16.
 */
module.exports = function(router){
  return router.namespace({
    index: function(req, res, next){
      res.send("welcome to api/v2");
    }
  })
};