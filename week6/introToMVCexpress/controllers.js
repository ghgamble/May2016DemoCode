//IMPORT MODEL OF DB COLLECTIONS
var db = require('./models')//{ plates : platesArray}

//alternate syntax for controller functions
// function all(req,res){
//     //code
// }
// module.exports ={
//     all: all
// }
//EXPORT CONTROLLER OBJECTS
module.exports = {
    // CREATE PLATES CONTROLLER FOR ROUTE HANDLERS
    platesController: {
      all: function(req, res){
          console.log("Querying db for all plate objects!")
          //db.plates.find(query to find the collection)
          res.json(db.plates)//Or res.send(db.plates)
      },//end of my all method
      create: function(req,res){
          console.log("Data from form: ", req.body)
          res.json({status: 200, success: true, message: "Created new plate!"})
      }//end of create method
    }//end of my plates controller
}
