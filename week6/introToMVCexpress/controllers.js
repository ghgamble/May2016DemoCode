//IMPORT MODEL OF DB COLLECTIONS
var db = require('./models')//{ plates : platesArray}

//EXPORT CONTROLLER OBJECTS
module.exports = {
    // CREATE PLATES CONTROLLER FOR ROUTE HANDLERS
    platesController: {
      all: function(req, res){
          console.log("Querying db for all plate objects!")
          res.json(db.plates)//Or res.send(db.plates)
      },//end of my all method
      create: function(req,res){

      }//end of create method
    }//end of my plates controller
}
