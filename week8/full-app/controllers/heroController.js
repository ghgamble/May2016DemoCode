// Require the model
var Hero = require('../models/heroes')

module.exports = {

    get : function(req, res){

        if(req.params.id){
            // Get One
            Hero.findOne({_id : req.params.id}, function(err, hero){
                res.send(hero)
            })
        }
        else{
            // Get Many
            Hero.find({}, function(err, heroes){
                res.send(heroes)
            })
        }

    },

    upsert : function(req, res){
        if(req.params.id){
            // Update
            Hero.update({_id : req.params.id}, req.body, function(err, updated){
                if(err){
                   return res.send(err)
                }
                res.send(updated)
            })
        }
        else{
            // Create
            var newHero = new Hero(req.body)
            
            newHero.save(function(err, doc){
                res.send(doc)
            })
        }
    },
    
    delete : function(req, res){

    }

}