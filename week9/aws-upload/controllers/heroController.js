// Require the model
var Hero = require('../models/heroes')
// var config = require('../config.js')
// NEW MODULE
var s3 = require('s3')
// Initial Config
var s3Client = s3.createClient({
    s3Options :{
        accessKeyId : 'KEY',
        secretAccessKey : 'SECRET'
    }
})


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

            // Aliasing parts of request obj for easier access
            var body = req.body.data
            var file = req.files.files

            // Initiate the upload
            var uploader = s3Client.uploadFile({
                    localFile : file.path,
                    s3Params :{
                        Bucket : 'BUCKET NAME', // "droplet" / container for s3 storage
                        Key : '/stuff/' + file.name, // filepath on the bucket where the image will live
                        // Key : file.name,
                        ACL : 'public-read', // Access control
                    }
                })

            uploader.on('progress', function(){
                console.log("progress", uploader.progressAmount, uploader.progressTotal)
            })

            
            uploader.on('end', function(){
                
                var url = s3.getPublicUrlHttp('BUCKET NAME', '/stuff/' + file.name) //Takes Bucket name and filepath IN the bucket
                console.log('URL', url)

                req.body.data.costume = url
                var newHero = new Hero(req.body.data)
            
                newHero.save(function(err, doc){
                    res.send(doc)
                })
            })



            
        }
    },
    
    delete : function(req, res){

    }

}