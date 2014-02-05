/* 

   This documents some of the user db and just some straight forward
   node/mongo nonsense I keep forgetting.


   To make this work with npm and shit on a running marmalade vm:

    PATH=$NODEROOT/bin:$PATH
    cd ~/.node_modules/marmalade
    node
*/

// specify a username to find
var username_to_find = "someuser";
var mongo = require("mongodb");
var server=new mongo.Server("localhost", m.Connection.DEFAULT_PORT, {});
var mdb = new m.Db("marmalade", ms).open(
  function (err, db) { 
    db.collection(
      "users", 
      function (err, users_col) {
        colusers.findOne(
          { "name": username_to_find },
          function (err, user) {
            console.log(user.digest);
          }
        );
      }
    )
  }
);

/* Ends */
