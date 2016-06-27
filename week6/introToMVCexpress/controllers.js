//IMPORT MODEL OF DB COLLECTIONS
var Plate = require('./models')//{ plates : platesArray}

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
          //res.json(db.plates)//Or res.send(db.plates)
          Plate.find({},function(error,plates){
              if(error) console.log(error)
              if(!error){
                  res.json(plates)
              }
          })
      },//end of my all method
      create: function(req,res){
          console.log("Data from form: ", req.body)
          var plate = new Plate(req.body)
          plate.save(function(err,plate){
              if(err) console.log(err)
              if(!err) res.json(plate)
              //curl -H "Content-Type: application/json" -X POST -d '{"name":"xyz","category":"xyz", "price": 99}' http://localhost:1337/api/v1/plates
          })
          // res.json({status: 200, success: true, message: "Created new plate!"})
      }//end of create method
    }//end of my plates controller
}
